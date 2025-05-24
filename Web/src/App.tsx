import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import myRoutes from 'config/routes.tsx';
import { getTheme } from 'config/theme/getTheme';
import useAppConfig from 'store/useAppConfig';

import GlobalModal from 'ui/components/global_modal.tsx/GlobalModal';
import GlobalSnackbar from 'ui/components/global_snackbar/GlobalSnackbar';
import ErrorBoundary from 'ui/components/boundaries/ErrorBoundary';
import LoadingPage from 'ui/components/boundaries/LoadingPage';


const queryClient = new QueryClient();
const router = createBrowserRouter(myRoutes);

const App: React.FC = () => {
  const themeMode = useAppConfig(state => state.theme);
  const theme = getTheme(themeMode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <GlobalModal />
          <GlobalSnackbar />
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
