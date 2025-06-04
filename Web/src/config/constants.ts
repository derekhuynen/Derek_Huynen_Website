import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

export const APPLICATION = {
	Home: {
		id: 'home',
		label: 'Home',
		route: '/',
		icon: PersonIcon,
	},
	Projects: {
		id: 'projects',
		label: 'Projects',
		route: '/projects',
		icon: BuildIcon,
	},
	Experiences: {
		id: 'experiences',
		label: 'Experiences',
		route: '/experiences',
		icon: FolderIcon,
	},
	Posts: {
		id: 'posts',
		label: 'Posts',
		route: '/posts',
		icon: ArticleIcon,
	},
	Contact: {
		id: 'contact',
		label: 'Contact',
		route: '/contact',
		icon: EmailIcon,
	},
};

//Make Applicattion an array
export const APPLICATION_ARRAY = Object.values(APPLICATION);

export type ApplicationType = (typeof APPLICATION)[keyof typeof APPLICATION];

export const USER_NAME = 'Derek Huynen';
export const USER_EMAIL = 'derek.huynen@gmail.com';
export const USER_LINKEDIN_URL = 'https://www.linkedin.com/in/derekhuynen/';
export const GITHUB_URL = 'https://github.com/derekhuynen';
export const FOOTER_RIGHTS = 'Derek Huynen. All rights reserved.';

export const AVATAR_URL = '/derekhuynen/avatar_derek-min.png';

export const BASE_URL = import.meta.env.VITE_BASE_URL || '';
export const CONSTANT_ME_URL = '/api/contact_me';

export const RESUME_FILE_NAME = 'DerekHuynenResume.pdf';
export const RESUME_URL = `/derekhuynen/${RESUME_FILE_NAME}`;

export const WEBSITE_INFO = {
	projects_page: {
		title: 'Projects',
		description:
			'Explore a curated selection of my software development projects, highlighting a range of technologies, problem-solving approaches, and creative solutions. Each project demonstrates my commitment to quality, innovation, and continuous learning in the field of software engineering.',
	},
	experiences_page: {
		title: 'Experiences',
		description:
			'Welcome to my professional journey. Here you can download my resume and explore a detailed timeline of my work experience, showcasing the roles I have held, the skills I have developed, and the impact I have made across various organizations. My career reflects a passion for software engineering, a dedication to continuous growth, and a commitment to delivering high-quality solutions in dynamic environments.',
	},
	home_page: {
		hero: {
			title: 'Senior Software Developer',
			subtitle: 'Discover my projects, experiences, and skills.',
			action: 'Contact Me',
		},
	},
	contact_me_page: {
		title: 'Contact Me',
		description:
			'I would love to hear from you! Whether you have a question, a job opportunity, or just want to connect, fill out the form below and I’ll get back to you as soon as possible.',
	},
	POSTS_TITLE: 'My Posts',
	POSTS_DESCRIPTION: `Every other day, I share a new post about AI-generated topics, ideas, and trends. Each post is created using my own AI-powered automation tools, combining Azure OpenAI for content and DALL-E for images.

These posts are designed to inspire, inform, and showcase the possibilities of modern AI. Whether you're interested in the latest advancements, practical applications, or just curious about what AI can create, you'll find something new here regularly.

All content and images are generated and published automatically as part of my ongoing exploration of AI-driven creativity.`,
};

export const GITHUB_LINK =
	'https://github.com/derekhuynen/LinkedIn_AI_Auto_Poster';
export const GITHUB_BUTTON_TEXT = 'Linkedin Auto Poster';
