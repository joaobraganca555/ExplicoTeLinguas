import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, Stack, Typography } from '@mui/material';
import { facebookUrl, instagramUrl } from '../../constants/social';

const Error = () => {
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
        src="error.png"
        style={{ maxWidth: '100%', maxHeight: 350 }}
        alt="Error"
      />
      <Stack gap={2} justifyContent="center" alignItems="center">
        <Typography
          variant={isMobile ? 'h4' : 'h1'}
          fontWeight="bold"
          color="primary"
        >
          Oh não!
        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h5'} color="primary">
          Parece que algo correu mal!
        </Typography>
        <Stack gap={1} justifyContent="center" alignItems="center">
          <Typography color="primary">
            Estás ansioso/a por entrar em contacto?
          </Typography>
          <Typography color="primary">
            Envia-me um e-mail para{' '}
            <Link href="mailto:explico.te.linguass@gmail.com">
              explico.te.linguass@gmail.com
            </Link>
          </Typography>
          <Typography color="primary">
            Segue-me em <Link href={instagramUrl}>@explico.te_linguas</Link> no
            Instagram ou em <Link href={facebookUrl}>Explico-te Línguas</Link>{' '}
            no Facebook
          </Typography>
          <Typography color="primary">para atualizações e notícias.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Error;
