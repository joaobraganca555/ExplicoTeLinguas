import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme.js';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
