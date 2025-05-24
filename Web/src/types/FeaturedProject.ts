export interface FeaturedProject {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	tech: string[];
	githubUrl: string;
	liveUrl?: string;
}
