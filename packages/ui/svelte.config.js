// @ts-check

import * as path from 'node:path';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			'@': path.join(import.meta.dirname, 'src'),
		},
	},
	preprocess: [
		sveltePreprocess({
			globalStyle: true,
			typescript: {
				tsconfigFile: path.join(import.meta.dirname, 'tsconfig.svelte.json'),
			},
		}),
	],
};

export default config;
