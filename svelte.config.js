import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import atImport from 'postcss-import';
import path from 'path';

const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				atImport({
					root: process.cwd(),
					// import should default to node_modules, then look into src
					path: [path.join(process.cwd(), 'node_modules'), path.join(process.cwd(), 'src')],
				}),
			],
		},
	}),
	kit: {
		adapter: adapter(),
		alias: {
			'@': path.resolve(path.resolve(), './src'),
		},
	},
};

export default config;
