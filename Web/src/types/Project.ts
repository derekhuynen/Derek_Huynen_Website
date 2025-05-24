export type Project = {
	id?: string;
	title: string;
	description: string;
	imageUrl?: string;
	technologies?: string[];
	tech?: string[];
	githubUrl?: string | null;
	websiteUrl?: string | null;
	type?: string; // 'Personal' | 'Work'
	startDate?: string;
	endDate?: string;
	company?: string;
	role?: string;
	date?: string;
};
