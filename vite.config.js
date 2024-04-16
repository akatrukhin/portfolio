import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

const production = process.env.BUILD_ENV || false

// https://vitejs.dev/config/
export default defineConfig({
	base: production ? 'https://you-need-a-dev-like.me' : '',
	plugins: [
		svelte({ preprocess: autoPreprocess() }),
		typescript({ sourceMap: !production }),
		dynamicImportVars
	]
})
