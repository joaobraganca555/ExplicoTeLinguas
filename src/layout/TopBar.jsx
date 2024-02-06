import { Facebook, Instagram } from '@mui/icons-material';
import {
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';

import { useLocation, useNavigate } from 'react-router';
import { facebookUrl, instagramUrl } from '../constants/social';

const pathnameIndex = {
  '/sobremim': 0,
  '/horario': 1,
  '/precos': 2
};

const indexToPathname = {
  0: '/sobremim',
  1: '/horario',
  2: '/precos'
};

const TopBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Stack padding={0.5} sx={{ backgroundColor: theme.palette.primary.main }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          justifyContent="center"
          onClick={() => navigate('/sobremim')}
          sx={{ cursor: 'pointer' }}
        >
          <img style={{ borderRadius: 50 }} src="logo.jpeg" width={40} />
          <Typography color="secondary" variant="h6">
            Explico-te Línguas
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={5}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={pathnameIndex[pathname]}
            onChange={(event, newValue) => navigate(indexToPathname[newValue])}
          >
            <Tab
              sx={{ color: theme.palette.secondary.main }}
              label="Sobre Mim"
            />
            <Tab sx={{ color: theme.palette.secondary.main }} label="Horário" />
            <Tab sx={{ color: theme.palette.secondary.main }} label="Preços" />
          </Tabs>
          <Stack direction="row">
            <IconButton onClick={() => window.open(instagramUrl, '_blank')}>
              <Instagram color="secondary" sx={{ cursor: 'pointer' }} />
            </IconButton>
            <IconButton onClick={() => window.open(facebookUrl, '_blank')}>
              <Facebook color="secondary" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopBar;
