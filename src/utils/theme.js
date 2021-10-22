import { blue, green, red, neutral } from './colors';
import { primaryFont, displayFont } from './typography';

export const theme = {
	primaryColor: blue[200],
	secondaryColor: blue[100],
	startColor: green[100],
	stopColor: red[200],
	resetColor: blue[300],
	disabledColor: blue[100],
	neutralBackground: neutral[200],
	lightBackground: neutral[100],
	mediumBackground: blue[100],
	darkBackground: blue[500],

	lightTextColor: neutral[100],
	mediumTextColor: blue[400],
	darkTextColor: blue[500],

	dropShadow: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15))',
	dropShadowOnHover: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))',

	primaryFont,
	displayFont
	
}