import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Thing responsible for the geenrated output
		// Reference: https://kit.svelte.dev/docs/adapter-static
		adapter: adapter({
			fallback: '200.html'
		})
	}
};

export default config;
