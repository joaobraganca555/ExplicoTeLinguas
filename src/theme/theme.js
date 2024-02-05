import { createTheme } from '@mui/material';
import '@fontsource/montserrat';

const theme = createTheme({
  palette: {
    primary: { main: '#c1a2ff', contrastText: '#FFFFFF' },
    secondary: { main: '#fff7f2' }
  },
  background: {
    paper: '#FFFFFF',
    default: '#F5F5F5'
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontWeight: 400,
      fontSize: 96,
      letterSpacing: '-1.5px'
    },
    h2: {
      fontWeight: 400,
      fontSize: 60,
      letterSpacing: '-0.5px'
    },
    h3: {
      fontWeight: 400,
      fontSize: 48
    },
    h4: {
      fontWeight: 400,
      fontSize: 34,
      letterSpacing: '0.25px'
    },
    h5: {
      fontWeight: 400,
      fontSize: 24
    },
    h6: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '0.15px'
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: '0.15px'
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '0.17px'
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: '0.15px'
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '0.1px'
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '0.4px'
    },
    overline: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '1px'
    }
  }
});

export default theme;
