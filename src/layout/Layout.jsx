import { Stack, Toolbar, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
import TopBar from './TopBar';

const Layout = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{ minHeight: '100vh', backgroundColor: theme.palette.secondary.main }}
    >
      <TopBar />
      <Stack sx={{ flex: 1 }}>
        <Toolbar />
        <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Layout;
