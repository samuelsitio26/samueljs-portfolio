/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#0a1628',
				'primary-blue': '#1e3a5f',
				'accent-orange': '#f97316',
				'accent-red': '#ef4444',
				'accent-blue': '#3b82f6',
				'accent-green': '#22c55e',
				'highlight-green': '#4ade80',
			},
		},
	},
	plugins: [],
	// Add this to reduce CSS file size in production
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
