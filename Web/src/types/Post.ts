// Post type definition (as provided by user)
export type Post = {
	id?: string;
	topic: string;
	topicDescription?: string;
	research?: string;
	content: string;
	linkedInPost?: string;
	createdAt: string;
	triggerBy?: string;
	imageUrl?: string;
	blobStorageUrl?: string;
	imageAsset?: string;
	imagePrompt?: string;
};
