import {
  Avatar,
  Box,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useFetchAna } from '../hooks/useFetchAna';
import { pocketUrl } from '../constants/pocketbase';
import Error from './misc/Error';

const Profile = () => {
  const { data: ana, isLoading, isError, error } = useFetchAna();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isError) {
    console.log(error);
    return <Error />;
  }

  return (
    <Stack gap={isMobile ? 5 : 10} padding={5}>
      <Stack justifyContent="center" alignItems="center" gap={isMobile ? 2 : 4}>
        <img
          src="starsGlow.png"
          style={{ lineHeight: '0px', display: 'flex' }}
          width={isMobile ? 45 : 85}
        />
        <Typography
          textAlign="center"
          color="primary"
          lineHeight="5px"
          fontSize={{ xs: '30px', sm: '30px', md: '50px', lg: '50px' }}
          fontFamily="Sulat Rizal Free"
        >
          Quem sou eu?
        </Typography>
      </Stack>
      <Stack
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
        gap={isMobile ? 2 : 6}
      >
        <Stack gap={isMobile ? 2 : 6} alignItems="center">
          <Typography
            color="primary"
            textAlign={isMobile ? 'center' : 'inherit'}
          >
            Ana Moreira
          </Typography>
          <Typography
            color="primary"
            textAlign={isMobile ? 'center' : 'inherit'}
          >
            Vila Nova de Famalicão
          </Typography>
          <Typography
            color="primary"
            width={isMobile ? '100%' : 250}
            textAlign={isMobile ? 'center' : 'inherit'}
          >
            Finalista na licenciatura de Línguas Aplicadas, na Universidade do
            Minho
          </Typography>
          <Typography
            color="primary"
            width={isMobile ? '100%' : 250}
            textAlign={isMobile ? 'center' : 'inherit'}
          >
            Fui técnica de Atividades de Enriquecimento Curricular em escolas
            primárias
          </Typography>
        </Stack>
        <Box
          sx={{
            width: isMobile ? '50vw' : '31vw',
            height: isMobile ? '50vw' : '31vw',
            maxWidth: '80%', // Ensure it does not overflow the screen width on small devices
            maxHeight: '80%', // Ensure it does not overflow the screen height on small devices
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '20px solid #fff',
            overflow: 'hidden' // Ensure the Avatar does not overflow the Box
          }}
        >
          {!isLoading ? (
            <Avatar
              alt="Ana Moreira"
              src={`${pocketUrl}/api/files/${ana?.collectionId}/${ana?.id}/${ana?.avatar}`}
              sx={{
                width: isMobile ? '45vw' : '50vw', // Adjusted for a little gap inside the border
                height: isMobile ? '45vw' : '50vw', // Same as width to maintain aspect ratio
                maxWidth: '100%', // Ensure it does not overflow the Box
                maxHeight: '100%', // Same as maxWidth for aspect ratio
                position: 'relative',
                zIndex: 1
              }}
            />
          ) : (
            <Skeleton
              variant="circular"
              sx={{
                width: isMobile ? '45vw' : '50vw',
                height: isMobile ? '45vw' : '50vw'
              }}
            />
          )}
        </Box>

        <Stack gap={isMobile ? 2 : 6} alignItems="center">
          {isLoading ? (
            <Skeleton width={150} />
          ) : (
            <Typography
              color="primary"
              width={isMobile ? '100%' : 250}
              textAlign="center"
            >
              {ana?.age}
            </Typography>
          )}
          <Typography
            color="primary"
            width={isMobile ? '100%' : 250}
            textAlign={isMobile ? 'center' : 'end'}
          >
            Sonho ser professora universitária de espanhol
          </Typography>
          <Typography
            color="primary"
            width={isMobile ? '100%' : 250}
            textAlign={isMobile ? 'center' : 'end'}
          >
            Tenho muito amor pela minha vocação e procuro sempre fazer o meu
            melhor
          </Typography>
          <Typography
            color="primary"
            width={isMobile ? '100%' : 250}
            textAlign={isMobile ? 'center' : 'end'}
          >
            Fui técnica de Atividades de Enriquecimento Curricular em escolas
            primárias
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
