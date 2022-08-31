import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const production = process.env.BUILD_ENV || false;

// https://vitejs.dev/config/
export default defineConfig({
	base: production ? '/portfolio/' : '',
	plugins: [svelte({ preprocess: autoPreprocess() }), typescript({ sourceMap: !production })]
});
