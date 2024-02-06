import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import { useFetchAna } from '../hooks/useFetchAna';
import { pocketUrl } from '../constants/pocketbase';
import Error from './misc/Error';

const Profile = () => {
  const { data: ana, isLoading, isError, error } = useFetchAna();

  if (isError) {
    console.log(error);
    return <Error />;
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      padding={5}
      gap={10}
      height="calc(100vh - 180px)"
    >
      <Stack justifyContent="center" alignItems="center">
        <img
          style={{ lineHeight: '0px', display: 'flex' }}
          src="starsGlow.png"
          width={100}
        />
        <Typography
          textAlign="center"
          color="primary"
          lineHeight="5px"
          fontSize={{ xs: '40px', sm: '40px', md: '60px', lg: '60px' }}
          fontFamily="Sulat Rizal Free"
        >
          Quem sou eu?
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={2}>
        <Stack gap={10} alignItems="end">
          <Typography color="primary">Ana Moreira</Typography>
          <Typography color="primary">Vila Nova de Famalicão</Typography>
          <Typography color="primary" width={250}>
            Finalista na licenciatura de Línguas Aplicadas, na Universidade do
            Minho
          </Typography>
          <Typography color="primary" width={250}>
            Fui ténica de Atividades de Enriquecimento Curricular em escolas
            primárias
          </Typography>
        </Stack>
        <Box
          sx={{
            width: 402, // Avatar width plus double the gap width
            height: 402, // Avatar height plus double the gap width
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '35px solid #fff' // The border is 20px solid white
          }}
        >
          {!isLoading ? (
            <Avatar
              alt="Ana Moreira"
              src={`${pocketUrl}/api/files/${ana?.collectionId}/${ana?.id}/${ana?.avatar}`}
              sx={{
                width: 380, // Actual image width
                height: 380, // Actual image height
                position: 'relative', // This ensures the avatar is on top of the pseudo-element
                zIndex: 1 // This brings the avatar above the pseudo-element (gap)
              }}
            />
          ) : (
            <Skeleton
              variant="circular"
              sx={{
                width: 380, // Actual image width
                height: 380, // Actual image height
                position: 'relative', // This ensures the avatar is on top of the pseudo-element
                zIndex: 1 // This brings the avatar above the pseudo-element (gap)
              }}
            />
          )}
        </Box>
        <Stack gap={10} alignItems="start">
          <Typography color="primary" width={250}>
            {`${ana?.age || ''}`}
          </Typography>
          <Typography textAlign="end" color="primary" width={250}>
            Sonho ser professora universitária de espanhol
          </Typography>
          <Typography textAlign="end" color="primary" width={250}>
            Tenho muito amor pela minha vocação e procuro sempre fazer o meu
            melhor
          </Typography>
          <Typography textAlign="end" color="primary" width={250}>
            Fui ténica de Atividades de Enriquecimento Curricular em escolas
            primárias
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
