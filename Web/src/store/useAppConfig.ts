import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

interface AppConfigStore {
	theme: ThemeMode;
	setTheme: (theme: ThemeMode) => void;
	toggleTheme: () => void;
}

const useAppConfig = create<AppConfigStore>(set => ({
	theme: 'dark',
	setTheme: theme => set({ theme }),
	toggleTheme: () =>
		set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));

export default useAppConfig;
