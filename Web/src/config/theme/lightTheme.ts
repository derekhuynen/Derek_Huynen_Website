import { createTheme } from '@mui/material/styles';

// Add this to extend the MUI theme with custom colors
declare module '@mui/material/styles' {
	interface Theme {
		custom: {
			main: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		custom?: {
			main?: string;
		};
	}
}

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#e06a00', // Slightly darker orange for button color
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#393E46', // Selected nav link color (orange)
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#E5E5E5',
			paper: '#F2F2F2',
		},
		text: {
			primary: '#212121',
			secondary: '#616161',
		},
		error: { main: '#D32F2F', contrastText: '#FFFFFF' },
		warning: { main: '#F4802B', contrastText: '#FFFFFF' },
		success: { main: '#388E3C', contrastText: '#FFFFFF' },
		divider: '#E0E0E0',
	},
	custom: {
		main: '#1976d2', // Example blue, change as needed
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
	},
});
