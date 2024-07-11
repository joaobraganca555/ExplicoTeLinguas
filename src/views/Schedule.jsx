import { Facebook } from '@mui/icons-material';
import { Skeleton, Stack, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useFetchSchedules } from '../hooks/useFetchSchedules.js';
import Error from './misc/Error.jsx';

const ScheduleItem = ({ day, hours }) => {
  const theme = useTheme();
  return (
    <Stack
      borderRadius={8}
      padding={3}
      backgroundColor={theme.palette.primary.main}
      width="90vw"
      maxWidth="350px"
    >
      <Typography
        textAlign="center"
        color="white"
        fontSize={{ xs: '15px', sm: '17px', md: '20px', lg: '20px ' }}
      >
        {day}
      </Typography>
      <Typography
        textAlign="center"
        color="white"
        fontSize={{ xs: '15px', sm: '17px', md: '20px', lg: '20px ' }}
      >
        {hours}
      </Typography>
    </Stack>
  );
};

ScheduleItem.propTypes = {
  day: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
};

const Schedule = () => {
  const { data: records, isLoading, isError } = useFetchSchedules();

  if (isError) return <Error />;

  return (
    <Stack padding={2} gap={5} width="100%">
      <Stack
        width="50%"
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          textAlign="center"
          color="primary"
          fontSize={{ xs: '40px', sm: '40px', md: '45px', lg: '55px' }} // Adjusted font sizes
          fontFamily="Catchy Mager"
        >
          HORÁRIO
        </Typography>

        <Typography
          textAlign="center"
          color="primary"
          fontSize={{ xs: '55px', sm: '75px', md: '90px', lg: '95px' }} // Adjusted font sizes
          fontFamily="BDScript-Regular"
          lineHeight="40px" // Adjusted line height
          // sx={{
          //   display: { xs: 'none', sm: 'block' }
          // }}
        >
          de funcionamento
        </Typography>

        <Stack direction="row" gap={10} justifyContent="space-between">
          <Typography
            color="primary"
            fontFamily="Catchy Mager"
            fontSize={{ xs: '10px', sm: '12px', md: '14px', lg: '16px' }} // Adjusted font sizes
          >
            *Até finais de setembro
          </Typography>
          <Typography
            color="primary"
            fontFamily="Catchy Mager"
            fontSize={{ xs: '10px', sm: '12px', md: '14px', lg: '16px' }} // Adjusted font sizes
          >
            *Sessões de 1h, 1h30 ou 2h
          </Typography>
        </Stack>
      </Stack>
      {!isLoading ? (
        <Stack gap={2.5} justifyContent="center" alignItems="center">
          {records?.map((schedule) => (
            <ScheduleItem
              isLoading={isLoading}
              key={schedule.id}
              day={schedule.day}
              hours={schedule.hours}
            />
          ))}
        </Stack>
      ) : (
        <Stack gap={2} justifyContent="center" alignItems="center">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              sx={{ borderRadius: 8 }}
              variant="rectangular"
              width="40%"
              height={112}
            />
          ))}
        </Stack>
      )}
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        gap={1}
        sx={{ cursor: 'pointer' }}
        onClick={() =>
          window.open(
            'https://www.facebook.com/profile.php?id=61555878369231',
            '_blank'
          )
        }
      >
        <Facebook color="primary" />
        <Typography color="primary">Explico-te Línguas</Typography>
      </Stack>
    </Stack>
  );
};

export default Schedule;
