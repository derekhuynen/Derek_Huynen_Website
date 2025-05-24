export type ContactMeRequest = {
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	name: string;
	email: string;
	phone?: string;
	topic: string;
	body: string;
};
