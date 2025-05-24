import type { IconConfig } from 'types/IconConfig';

const IconConfigs: Record<string, IconConfig> = {
	react: {
		iconName: 'FaReact',
		iconLibrary: 'fa',
		color: '#61dafb',
		displayLabel: 'React',
	},
	node: {
		iconName: 'FaNodeJs',
		iconLibrary: 'fa',
		color: '#3c873a',
		displayLabel: 'Node.js',
	},
	javascript: {
		iconName: 'FaJs',
		iconLibrary: 'fa',
		color: '#f7df1e',
		displayLabel: 'JavaScript',
	},
	typescript: {
		iconName: 'SiTypescript',
		iconLibrary: 'si',
		color: '#3178c6',
		displayLabel: 'TypeScript',
	},
	angular: {
		iconName: 'FaAngular',
		iconLibrary: 'fa',
		color: '#dd0031',
		displayLabel: 'Angular',
	},
	python: {
		iconName: 'SiPython',
		iconLibrary: 'si',
		color: '#3776ab',
		displayLabel: 'Python',
	},
	nextjs: {
		iconName: 'SiNextdotjs',
		iconLibrary: 'si',
		color: '#000000',
		displayLabel: 'Next.js',
	},
	docker: {
		iconName: 'SiDocker',
		iconLibrary: 'si',
		color: '#2496ed',
		displayLabel: 'Docker',
	},
	redux: {
		iconName: 'SiRedux',
		iconLibrary: 'si',
		color: '#764abc',
		displayLabel: 'Redux',
	},
	tailwind: {
		iconName: 'SiTailwindcss',
		iconLibrary: 'si',
		color: '#38bdf8',
		displayLabel: 'Tailwind CSS',
	},
	'material-ui': {
		iconName: 'SiMui',
		iconLibrary: 'si',
		color: '#007fff',
		displayLabel: 'Material UI',
	},
	jest: {
		iconName: 'SiJest',
		iconLibrary: 'si',
		color: '#007fff',
		displayLabel: 'Jest',
	},
	'automated-testing': {
		iconName: 'SiJest',
		iconLibrary: 'si',
		color: '#c21325',
		displayLabel: 'Automated Testing',
	},
	csharp: {
		iconName: 'SiSharp',
		iconLibrary: 'si',
		color: '#239120',
		displayLabel: 'C#',
	},
	dotnet: {
		iconName: 'SiDotnet',
		iconLibrary: 'si',
		color: '#512bd4',
		displayLabel: '.NET',
	},
	'azure-devops': {
		iconName: 'Azure DevOps',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Azure-DevOps.svg',
		displayLabel: 'Azure DevOps',
	},
	'azure-openai': {
		iconName: 'Azure OpenAI',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Azure-OpenAI.svg',
		displayLabel: 'Azure OpenAI',
	},
	openai: {
		iconName: 'Azure OpenAI',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Azure-OpenAI.svg',
		displayLabel: 'OpenAI',
	},
	'azure-document-intelligence': {
		iconName: 'Cognitive Services',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Cognitive-Services.svg',
		displayLabel: 'Azure Document Intelligence',
	},
	'azure-functions': {
		iconName: 'Function Apps',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Function-Apps.svg',
		displayLabel: 'Azure Functions',
	},
	'azure-ai-search': {
		iconName: 'Cognitive Search',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Cognitive-Search.svg',
		displayLabel: 'Azure AI Search',
	},
	'vector-db': {
		iconName: 'FaDatabase',
		iconLibrary: 'fa',
		color: '#4db33d',
		displayLabel: 'Vector DB',
	},
	'gpt-4': {
		iconName: 'SiOpenai',
		iconLibrary: 'si',
		color: '#412991',
		displayLabel: 'GPT-4',
	},
	'semantic-kernel': {
		iconName: 'FaBrain',
		iconLibrary: 'fa',
		color: '#512bd4',
		displayLabel: 'Semantic Kernel',
	},
	'ai-agents': {
		iconName: 'SiRobotframework',
		iconLibrary: 'si',
		color: '#000000',
		displayLabel: 'AI Agents',
	},
	linkedin: {
		iconName: 'SiLinkedin',
		iconLibrary: 'si',
		color: '#0077b5',
		displayLabel: 'LinkedIn',
	},
	pubsub: {
		iconName: 'SiApachekafka',
		svgPath: '/azure_icons/Event-Hubs.svg',
		iconLibrary: 'svg',
		color: '#231f20',
		displayLabel: 'Azure Event Hub',
	},
	'redux-saga': {
		iconName: 'SiReduxsaga',
		iconLibrary: 'si',
		color: '#999999',
		displayLabel: 'Redux-Saga',
	},
	'rest-apis': {
		iconName: 'SiPostman',
		iconLibrary: 'si',
		color: '#ff6c37',
		displayLabel: 'REST APIs',
	},
	agile: {
		iconName: 'SiJira',
		iconLibrary: 'si',
		color: '#0052cc',
		displayLabel: 'Agile',
	},
	seo: {
		iconName: 'SiGoogleoptimize',
		iconLibrary: 'si',
		color: '#4285f4',
		displayLabel: 'SEO',
	},
	strip: {
		iconName: 'SiStripe',
		iconLibrary: 'si',
		color: '#635bff',
		displayLabel: 'Stripe',
	},
	wordpress: {
		iconName: 'SiWordpress',
		iconLibrary: 'si',
		color: '#21759b',
		displayLabel: 'WordPress',
	},
	'google-workspace': {
		iconName: 'SiGoogle',
		iconLibrary: 'si',
		color: '#4285f4',
		displayLabel: 'Google Workspace',
	},
	networking: {
		iconName: 'SiCisco',
		iconLibrary: 'si',
		color: '#1ba0d7',
		displayLabel: 'Networking',
	},
	azure: {
		iconName: 'Azure',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/AI-Studio.svg',
		displayLabel: 'Azure',
	},
	cosmosdb: {
		iconName: 'Cosmos DB',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Azure-Cosmos-DB.svg',
		displayLabel: 'Cosmos DB',
	},
	sql: {
		iconName: 'SQL Server',
		iconLibrary: 'svg',
		color: '#CC2927',
		svgPath: '/azure_icons/Cognitive-Services.svg',
		displayLabel: 'SQL Server',
	},
	devops: {
		iconName: 'Azure DevOps',
		iconLibrary: 'svg',
		color: '#0078d4',
		svgPath: '/azure_icons/Azure-DevOps.svg',
		displayLabel: 'DevOps',
	},
};

export function getIconConfig(name: string): IconConfig | undefined {
	const key = name.toLowerCase().replace(/\s|\./g, '');
	return IconConfigs[key];
}

export function getColor(name: string): string | undefined {
	const config = getIconConfig(name);
	return config?.color;
}
