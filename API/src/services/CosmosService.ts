import { CosmosClient, Database, Container } from '@azure/cosmos';

export interface CosmosServiceOptions {
	endpoint: string;
	key: string;
	databaseId: string;
}

export class CosmosService {
	private client: CosmosClient;
	private database: Database;

	constructor(private options: CosmosServiceOptions) {
		this.client = new CosmosClient({
			endpoint: options.endpoint,
			key: options.key,
		});
		this.database = this.client.database(options.databaseId);
	}

	getContainer(containerId: string): Container {
		return this.database.container(containerId);
	}

	async queryItems<T>(
		containerId: string,
		query: string,
		parameters: any[] = []
	): Promise<T[]> {
		const container = this.getContainer(containerId);
		const { resources } = await container.items
			.query({ query, parameters })
			.fetchAll();
		return resources as T[];
	}

	async createItem<T>(containerId: string, item: T): Promise<T> {
		const container = this.getContainer(containerId);
		const { resource } = await container.items.create(item);
		return resource as T;
	}

	async readItem<T>(
		containerId: string,
		id: string,
		partitionKey: string
	): Promise<T | undefined> {
		const container = this.getContainer(containerId);
		const { resource } = await container.item(id, partitionKey).read<T>();
		return resource;
	}

	async replaceItem<T>(
		containerId: string,
		id: string,
		partitionKey: string,
		item: T
	): Promise<T> {
		const container = this.getContainer(containerId);
		const { resource } = await container.item(id, partitionKey).replace(item);
		return resource as T;
	}

	async deleteItem(
		containerId: string,
		id: string,
		partitionKey: string
	): Promise<void> {
		const container = this.getContainer(containerId);
		await container.item(id, partitionKey).delete();
	}
}
