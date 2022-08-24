/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				// Using modern `hsl`
				darkBlue: 'hsl(var(--color-main-background) / <alpha-value>)',
				desaturatedBlue: 'hsl(var(--color-card-background) / <alpha-value>)',
				softViolet: 'hsl(var(--color-accent) / <alpha-value>)',
			},
		},
		fontFamily: {
			body: ['Inter', 'Arial', 'sans-serif'],
			alternate: ['Lexend Deca', 'Arial', 'sans-serif'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '15px',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
	},
	plugins: [],
};
