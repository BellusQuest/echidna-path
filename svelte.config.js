import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from "mdsvex";
import rehypeSlug from "rehype-slug";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
		mdsvex({
			smartypants: { backticks: true, dashes: true, ellipses: true, quotes: true},
			rehypePlugins: [rehypeSlug],
			remarkPlugins: [],
			extensions: [".md", ".svx"],
			layout: "./src/routes/guide/layout.svelte"
		}),
	],
	extensions: [".svelte", ".svx", ".md"],
	kit: {
		adapter: adapter({
			fallback: "index.html"
		})
	}
};

export default config;
