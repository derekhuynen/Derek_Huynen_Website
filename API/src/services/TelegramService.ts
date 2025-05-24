import axios from 'axios';

export interface TelegramServiceOptions {
	botToken: string;
	chatId: string;
}

export class TelegramService {
	private apiUrl: string;
	private chatId: string;

	constructor(options: TelegramServiceOptions) {
		this.apiUrl = `https://api.telegram.org/bot${options.botToken}/sendMessage`;
		this.chatId = options.chatId;
	}

	async sendMessage(message: string): Promise<void> {
		await axios.post(this.apiUrl, {
			chat_id: this.chatId,
			text: message,
			parse_mode: 'Markdown',
		});
	}
}
