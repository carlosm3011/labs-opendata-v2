/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				rose: colors.rose,
				primary: '#C43426',
				secondary: '#F9A51A',
				secondaryLight: '#FFE080',
				tertiary: '#009CC9',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
