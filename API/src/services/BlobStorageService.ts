import {
	BlobServiceClient,
	generateBlobSASQueryParameters,
	BlobSASPermissions,
	SASProtocol,
	StorageSharedKeyCredential,
} from '@azure/storage-blob';

export interface BlobStorageServiceOptions {
	accountName: string;
	accountKey: string;
}

export class BlobStorageService {
	private blobServiceClient: BlobServiceClient;
	private sharedKeyCredential: StorageSharedKeyCredential;

	constructor(private options: BlobStorageServiceOptions) {
		this.sharedKeyCredential = new StorageSharedKeyCredential(
			options.accountName,
			options.accountKey
		);
		this.blobServiceClient = new BlobServiceClient(
			`https://${options.accountName}.blob.core.windows.net`,
			this.sharedKeyCredential
		);
	}

	/**
	 * Generates a read-only SAS URL for a blob.
	 * @param containerName The name of the blob container.
	 * @param blobName The name of the blob (file).
	 * @param expiresInMinutes How long the SAS token should be valid (default: 60 minutes).
	 * @returns The full URL to the blob with SAS token.
	 */
	generateReadOnlyBlobSasUrl(
		containerName: string,
		blobName: string,
		expiresInMinutes = 60
	): string {
		const expiresOn = new Date(Date.now() + expiresInMinutes * 60 * 1000);
		// Set startsOn 5 minutes in the past to avoid clock skew issues
		const startsOn = new Date(Date.now() - 5 * 60 * 1000);
		const sasToken = generateBlobSASQueryParameters(
			{
				containerName,
				blobName,
				permissions: BlobSASPermissions.parse('r'),
				startsOn,
				expiresOn,
				protocol: SASProtocol.Https,
				version: '2022-11-02',
			},
			this.sharedKeyCredential
		).toString();

		return `${
			this.blobServiceClient
				.getContainerClient(containerName)
				.getBlobClient(blobName).url
		}?${sasToken}`;
	}
}
