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
      width="35%"
    >
      <Typography textAlign="center" color="white" variant="h5">
        {day}
      </Typography>
      <Typography textAlign="center" color="white" variant="h5">
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
    <Stack
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 100px)"
    >
      <Stack padding={2} width="60%" gap={5}>
        <Stack>
          <Typography
            textAlign="center"
            color="primary"
            fontSize={{ xs: '50px', sm: '60px', md: '70px', lg: '80px' }}
            fontFamily="Catchy Mager"
          >
            HORÁRIO
          </Typography>

          <Typography
            textAlign="center"
            color="primary"
            fontSize={{ xs: '100px', sm: '140px', md: '160px', lg: '180px' }}
            fontFamily="BDScript-Regular"
            lineHeight="50px"
            sx={{
              display: { xs: 'none', sm: 'block' }
            }}
          >
            de funcionamento
          </Typography>

          <Typography
            textAlign="end"
            color="primary"
            fontFamily="Catchy Mager"
            fontSize={{ xs: '12px', sm: '14px', md: '16px', lg: '18px' }}
          >
            *Sessões de 1h, 1h30 ou 2h
          </Typography>
        </Stack>
        {!isLoading ? (
          <Stack gap={2} justifyContent="center" alignItems="center">
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
    </Stack>
  );
};

export default Schedule;
