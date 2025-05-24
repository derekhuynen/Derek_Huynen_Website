import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#F4802B', // Brighter orange for button background
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#393E46',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#0D0D0D',
			paper: '#1A1A1A',
		},
		text: {
			primary: '#FFFFFF',
			secondary: '#B3B3B3',
		},
		error: { main: '#E53935', contrastText: '#FFFFFF' },
		warning: { main: '#F4802B', contrastText: '#FFFFFF' },
		success: { main: '#43A047', contrastText: '#FFFFFF' },
		divider: '#393E46',
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
	},
});
