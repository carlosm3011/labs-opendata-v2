/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				rose: colors.rose,
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
