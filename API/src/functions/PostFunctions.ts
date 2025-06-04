import {
	app,
	HttpRequest,
	HttpResponseInit,
	InvocationContext,
} from '@azure/functions';
import { CosmosService } from '../services/CosmosService';
import { Post } from '../types/Post';
import { BlobStorageService } from '../services/BlobStorageService';

export async function GetAllPosts(
	request: HttpRequest,
	context: InvocationContext
): Promise<HttpResponseInit> {
	context.log(`Http function processed request for url "${request.url}"`);

	if (request.method !== 'GET') {
		return { status: 405, body: 'Method Not Allowed' };
	}

	try {
		const cosmosOptions = {
			endpoint: process.env.COSMOS_ENDPOINT || '',
			key: process.env.COSMOS_KEY || '',
			databaseId: 'AutoPoster',
		};
		const cosmos = new CosmosService(cosmosOptions);
		const posts = await cosmos.queryItems<Post>(
			'LinkedInPosts',
			'SELECT * FROM c ORDER BY c.createdAt DESC'
		);

		// Use BlobStorageService to generate a single SAS URL per container for posts with blobStorageUrl
		const storageAccountName = process.env.AZURE_STORAGE_ACCOUNT || '';
		const accountKey = process.env.AZURE_STORAGE_KEY || '';
		const blobService = new BlobStorageService({
			accountName: storageAccountName,
			accountKey,
		});

		// Map to group posts by container
		const containerMap = new Map<string, Post[]>();
		for (const post of posts) {
			if (post.blobStorageUrl) {
				try {
					const url = new URL(post.blobStorageUrl);
					const containerName = url.pathname.split('/')[1];
					if (!containerMap.has(containerName)) {
						containerMap.set(containerName, []);
					}
					containerMap.get(containerName)!.push(post);
				} catch {
					// Ignore invalid URLs
				}
			}
		}

		// Generate SAS URLs for each container
		const containerSasMap = new Map<string, string>();
		for (const containerName of containerMap.keys()) {
			// Container-level SAS: pass empty string as blobName
			const sasUrl = blobService.generateReadOnlyBlobSasUrl(
				containerName,
				'',
				60
			);
			// Remove trailing '?' if present (since getBlobClient('') will add a slash)
			containerSasMap.set(containerName, sasUrl.replace(/\?$|\/$/, ''));
		}

		// Assign SAS URL to each post (blob-level SAS)
		const postsWithSas = posts.map(post => {
			if (post.blobStorageUrl) {
				try {
					const url = new URL(post.blobStorageUrl);
					const containerName = url.pathname.split('/')[1];
					const blobName = url.pathname.split('/').slice(2).join('/');
					if (containerName && blobName) {
						const sasUrl = blobService.generateReadOnlyBlobSasUrl(
							containerName,
							blobName,
							60
						);
						return { ...post, blobStorageUrl: sasUrl };
					}
				} catch {
					// Ignore invalid URLs
				}
			}
			return post;
		});

		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postsWithSas),
		};
	} catch (err) {
		context.log('Error querying posts from Cosmos DB:', err);
		return { status: 500, body: 'Failed to fetch posts' };
	}
}

app.http('get_all_posts', {
	methods: ['GET'],
	authLevel: 'anonymous',
	handler: GetAllPosts,
});
