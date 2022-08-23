/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				midnight: {
					50: '#f3f3f5',
					100: '#e6e8eb',
					200: '#c1c5cc',
					300: '#9ca2ad',
					400: '#515c70',
					500: '#071633',
					600: '#06142e',
					700: '#051126',
					800: '#040d1f',
					900: '#030b19',
				},
				'link-water': {
					50: '#fdfefe',
					100: '#fbfcfe',
					200: '#f5f8fb',
					300: '#eff3f9',
					400: '#e2ebf5',
					500: '#d6e2f0',
					600: '#c1cbd8',
					700: '#a1aab4',
					800: '#808890',
					900: '#696f76',
				},
				'slate-gray': {
					50: '#f8f9fa',
					100: '#f2f3f5',
					200: '#dee1e7',
					300: '#cacfd8',
					400: '#a3abba',
					500: '#7b879d',
					600: '#6f7a8d',
					700: '#5c6576',
					800: '#4a515e',
					900: '#3c424d',
				},
			},
		},
		fontFamily: {
			body: ['Outfit', 'Arial', 'sans-serif'],
		},
	},
	plugins: [],
};
