# Derek Huynen Personal Website

This project is a modern, responsive personal website built with the following technologies:

- **React** (with Vite)
- **TypeScript**
- **Material UI (MUI)** for UI components and theming
- **Zustand** for state management
- **Axios** for HTTP requests
- **React Hook Form** for form management
- **React Router DOM** for client-side routing
- **React Query** for data fetching and caching
- **Dynamic Icon Service** for consistent icon rendering
- **JSON-driven Content** for skills and projects

## Project Structure

```
DerekHuynenWeb/
├── public/                # Static assets
├── src/
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── assets/            # Images and icons
│   ├── config/            # App configuration
│   │   ├── json/          # JSON data for skills, projects, experience
│   ├── services/          # API and data services (Axios, React Query)
│   ├── store/             # Zustand state management
│   └── ui/
│       ├── components/    # Reusable UI components
│       │   ├── icon_service/   # Centralized icon mapping and service
│       │   ├── infinite_icon_carousel/ # Animated skill carousel
│       │   ├── tech/      # TechChip and tech icon mapping
│       ├── forms/         # Form components (React Hook Form)
│       ├── nav/           # Navigation components
│       └── pages/         # Route pages
│           ├── blog/      # Blog-related pages
│           ├── home/      # Home page (hero, skills, featured projects)
│           └── projects/  # Projects showcase
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project overview (this file)
```

## Data-Driven Features

- **Skills Carousel:** Powered by `src/config/json/featuredSkillIconKeys.json` for easy updates and consistency
- **Featured Projects:** Powered by `src/config/json/featuredProjects.json` for maintainable, type-safe project data
- **Icon Service:** All icons (skills, nav, tech chips) are rendered via a central service for consistency and theme support

## Planned Features

- **Home Page:** Introduction, profile, and featured content
- **Projects Page:** Portfolio of personal and professional projects
- **Blog Page:** Articles, tutorials, and updates
- **Contact Form:** Reach out via email (with validation)
- **Responsive Design:** Mobile-friendly and accessible
- **Modern UI:** Material UI theming and components
- **State Management:** Global state with Zustand
- **Data Fetching:** React Query for async data
- **JSON Content:** Easily update skills and projects via JSON files

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start the development server:
   ```powershell
   npm run dev
   ```

---

Let's start scaffolding the app together!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
	extends: [
		// Remove ...tseslint.configs.recommended and replace with this
		...tseslint.configs.recommendedTypeChecked,
		// Alternatively, use this for stricter rules
		...tseslint.configs.strictTypeChecked,
		// Optionally, add this for stylistic rules
		...tseslint.configs.stylisticTypeChecked,
	],
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
	plugins: {
		// Add the react-x and react-dom plugins
		'react-x': reactX,
		'react-dom': reactDom,
	},
	rules: {
		// other rules...
		// Enable its recommended typescript rules
		...reactX.configs['recommended-typescript'].rules,
		...reactDom.configs.recommended.rules,
	},
});
```

---

## 📦 Web README

This folder contains the frontend for Derek Huynen's personal website, built with React, Vite, and TypeScript.

### Features

- Modern, responsive UI with Material UI (MUI)
- State management with Zustand
- Data fetching with React Query and Axios
- Form handling with React Hook Form
- Routing with React Router DOM
- JSON-driven content for skills and projects

### Structure

```
Web/
├── public/                # Static assets and icons
├── src/
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── config/            # App configuration and JSON data
│   ├── services/          # API and helper services
│   ├── store/             # Zustand state management
│   └── ui/                # UI components and pages
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

### Local Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

### Environment Variables

- Configure `.env` for API endpoints and other settings as needed.

---

For more details, see the main project README or contact Derek Huynen.
