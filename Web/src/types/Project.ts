export type Project = {
	id: string;
	title: string;
	industry?: string;
	role?: string;
	date?: string;
	startDate?: string;
	endDate?: string | null;
	type?: string; // 'Personal' | 'Work'
	githubUrl?: string | null;
	websiteUrl?: string | null;
	short_description?: string;
	full_description?: string;
	what_i_worked_on_arr?: string[];
	challenges?: string[];
	takeaways?: string[];
	highlights?: string[];
	tech?: string[];
};
