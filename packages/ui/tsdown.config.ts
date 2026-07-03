import { defineConfig } from 'tsdown';

export default defineConfig((_) => ({
	entry: ['src/**/*.{ts,js,tsx,jsx}', '!src/svelte/**/*'],
	platform: 'neutral',
	target: 'es2018',
	sourcemap: true,
	unbundle: true,
	deps: {
		skipNodeModulesBundle: true,
	},
	tsconfig: 'tsconfig.app.json',
	dts: true,
	clean: true,
	copy: ['src/styles'],
	ignoreWatch: ['.turbo'],
}));
