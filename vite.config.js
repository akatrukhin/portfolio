import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const gitHubBuild = process.env.BUILD_ENV || false;

// https://vitejs.dev/config/
export default defineConfig({
	base: gitHubBuild ? '/portfolio/' : '',
	plugins: [svelte()]
});
