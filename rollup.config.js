import svelte from 'rollup-plugin-svelte';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.ts',
	output: {
		file: 'public/build/bundle.js',
		format: 'iife',
		name: 'app',
		sourcemap: false
	},
	plugins: [
		commonjs(),
		typescript(),
		svelte({
			dev: !production,
			css: css => {
				css.write('public/build/bundle.css');
			}
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		})
	],
	watch: {
		clearScreen: false
	},
}