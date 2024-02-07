import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import { Facebook, Instagram } from '@mui/icons-material';
import { instagramUrl, facebookUrl } from '../constants/social';

const drawerWidth = 240;
const navItems = ['Sobre Mim', 'Horário', 'Preços'];
const navigateItem = {
  'Sobre Mim': '/sobremim',
  Horário: '/horario',
  Preços: '/precos'
};

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  console.log(location);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} textAlign="center">
      {/* <img
        style={{ borderRadius: 50, marginTop: 10 }}
        src="logo4.png"
        height={50}
      /> */}
      <Typography variant="h6" sx={{ my: 1 }}>
        Explico-te Línguas
      </Typography>
      <Divider />
      <List>
        <>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => navigate(navigateItem[item])}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => window.open(facebookUrl, '_blank')}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={<Facebook />} secondary="Facebook" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => window.open(instagramUrl, '_blank')}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={<Instagram />} secondary="Instagram" />
            </ListItemButton>
          </ListItem>
        </>
      </List>
    </Box>
  );

  return (
    <Stack>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="secondary"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="secondary"
            variant="h7"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/sobremim')}
            >
              <img
                style={{
                  borderRadius: 50,
                  mr: 2,
                  display: { sm: 'none' }
                }}
                src="logo.jpeg"
                width={40}
              />
              Explico-te Línguas
            </Stack>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {navItems.map((item) => (
              <Button
                selected={location.pathname === navigateItem[item]}
                sx={{
                  backgroundColor:
                    location.pathname === navigateItem[item] &&
                    theme.palette.action.selected
                }}
                color="secondary"
                key={item}
                onClick={() => navigate(navigateItem[item])}
              >
                {item}
              </Button>
            ))}
            <Stack direction="row" gap={0.5}>
              <Instagram
                color="secondary"
                sx={{ cursor: 'pointer' }}
                onClick={() => window.open(instagramUrl, '_blank')}
              />
              <Facebook
                onClick={() => window.open(facebookUrl, '_blank')}
                sx={{ cursor: 'pointer' }}
                color="secondary"
              />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Stack>
  );
};

export default TopBar;
