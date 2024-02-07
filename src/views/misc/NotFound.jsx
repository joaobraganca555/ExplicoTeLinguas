import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, Stack, Typography } from '@mui/material';

const NotFound = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction={isMobile ? 'column' : 'row'}
      spacing={isMobile ? 2 : 5}
      textAlign="center"
    >
      <img
        src="notFound.png"
        style={{ maxWidth: '100%', maxHeight: 350 }}
        alt="Not Found"
      />
      <Stack gap={2} justifyContent="center" alignItems="center">
        <Typography
          variant={isMobile ? 'h4' : 'h1'}
          fontWeight="bold"
          color="primary"
        >
          Ops!
        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h5'} color="primary">
          Não conseguimos encontrar a página que procuras.
        </Typography>
        <Typography color="primary">
          Talvez tenhas digitado o endereço errado ou a página tenha sido
          movida.
        </Typography>
        <Link href="#/sobremim">Voltar à página inicial</Link>
      </Stack>
    </Stack>
  );
};

export default NotFound;
