/// <reference types="node" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		alias: {
			ui: resolve(__dirname, 'src/ui'),
			store: resolve(__dirname, 'src/store'),
			config: resolve(__dirname, 'src/config'),
			services: resolve(__dirname, 'src/services'),
			assets: resolve(__dirname, 'src/assets'),
		},
	},
});
