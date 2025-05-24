import type { Theme } from '@mui/material/styles';
import { darkTheme } from './darkThemes';
import { lightTheme } from './lightTheme';

export function getTheme(mode: 'light' | 'dark'): Theme {
	return mode === 'dark' ? darkTheme : lightTheme;
}
