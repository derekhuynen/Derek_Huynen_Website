import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';

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

export const BASE_URL = process.env.VITE_BASE_URL || '';
export const CONSTANT_ME_URL = '/contact_me';

export const RESUME_URL = '/derekhuynen/resume_derekhuynen.pdf';
