import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { instagramUrl } from '../../constants/social';

const Error = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 80px)"
    >
      <Stack direction="row">
        <img src="error.png" />
        <Stack gap={3} justifyContent="center" alignItems="center">
          <Typography variant="h1" fontWeight="bold" color="primary">
            Oh não!
          </Typography>
          <Typography variant="h5" color="primary">
            Parece que algo correu mal!
          </Typography>
          <Stack justifyContent="center" alignItems="center">
            <Typography color="primary">
              Estás ansioso/a por entrar em contacto?
            </Typography>
            <Typography color="primary">
              Envia-me um e-mail para{' '}
              <Link to="mailto:explico.te.linguass@gmail.com">
                explico.te.linguass@gmail.com.
              </Link>
            </Typography>
            <Typography color="primary">
              Segue-me em <Link to={instagramUrl}>@explico.te_linguas</Link> no
              Instagram ou em Explico-te Línguas no Facebook
            </Typography>
            <Typography color="primary">
              para atualizações e notícias.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Error;
