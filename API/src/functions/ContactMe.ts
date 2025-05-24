import {
	app,
	HttpRequest,
	HttpResponseInit,
	InvocationContext,
} from '@azure/functions';
import { CosmosService } from '../services/CosmosService';
import { TelegramService } from '../services/TelegramService';
import { ContactMeRequest } from '../types/ContactMeRequest';

export async function ContactMe(
	request: HttpRequest,
	context: InvocationContext
): Promise<HttpResponseInit> {
	context.log(`Http function processed request for url "${request.url}"`);

	if (request.method !== 'POST') {
		return { status: 405, body: 'Method Not Allowed' };
	}

	let data: ContactMeRequest;
	try {
		data = (await request.json()) as ContactMeRequest;
	} catch {
		return { status: 400, body: 'Invalid JSON body' };
	}

	try {
		const cosmosOptions = {
			endpoint: process.env.COSMOS_ENDPOINT || '',
			key: process.env.COSMOS_KEY || '',
			databaseId: process.env.COSMOS_DATABASE || '',
		};
		const cosmos = new CosmosService(cosmosOptions);
		data.createdAt = new Date().toISOString();
		data.updatedAt = new Date().toISOString();
		await cosmos.createItem(process.env.COSMOS_CONTAINER || '', data);
	} catch (err) {
		context.log('Error saving to Cosmos DB:', err);
		return { status: 500, body: 'Failed to save contact request::' + err };
	}

	try {
		const telegramOptions = {
			botToken: process.env.TELEGRAM_BOT_TOKEN || '',
			chatId: process.env.TELEGRAM_CHAT_ID || '',
		};
		const telegram = new TelegramService(telegramOptions);
		await telegram.sendMessage(
			`New contact request from ${data.name} (${data.email}${
				data.phone ? ', ' + data.phone : ''
			}):\nTopic: ${data.topic}\n${data.body}`
		);
	} catch (err) {
		context.log('Error sending Telegram notification:', err);
	}

	return { status: 200, body: 'Contact request received' };
}

app.http('contact_me', {
	methods: ['POST'],
	authLevel: 'anonymous',
	handler: ContactMe,
});
