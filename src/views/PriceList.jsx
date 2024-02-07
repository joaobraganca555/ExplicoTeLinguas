import {
  Chip,
  Divider,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  useFetchListPrice,
  useFetchSubjects
} from '../hooks/useFetchListPrice';
import Error from './misc/Error';
import { Mail } from '@mui/icons-material';
import { useFetchAna } from '../hooks/useFetchAna';

const PriceList = () => {
  const {
    data: prices,
    isLoading: isLoadingListPrice,
    isError: isErrorListPrice
  } = useFetchListPrice();

  const {
    data: subjects,
    isLoading: isLoadingSubjects,
    isError: isErrorSubjects
  } = useFetchSubjects();

  const {
    data: ana,
    isLoading: isLoadingAna,
    isError: isErrorAna
  } = useFetchAna();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isErrorListPrice || isErrorSubjects || isErrorAna) return <Error />;

  return (
    <Stack gap={3} padding={2}>
      <Stack>
        <Typography
          lineHeight={0.7}
          variant={isMobile ? 'h3' : 'h2'} // Adjusted font size for mobile
          color="primary"
          fontFamily="Catchy Mager"
          alignSelf={isMobile ? 'center' : 'end'}
        >
          Tabela de Preços
        </Typography>
        <Typography
          alignSelf={isMobile ? 'center' : 'end'}
          color="primary"
          fontSize={isMobile ? '12px' : 'inherit'}
        >
          *por hora
        </Typography>
      </Stack>
      <Stack justifyContent="center">
        <Chip
          color="primary"
          label="EXPLICAÇÕES"
          size={isMobile ? 'small' : 'medium'}
          sx={{
            width: '100%', // Adjusted width for mobile
            fontSize: '15px',
            letterSpacing: '2px',
            fontWeight: 'bold',
            marginBottom: '5px',
            alignSelf: 'center'
          }}
        />
        {!isLoadingListPrice ? (
          prices.map((p, index) => (
            <Stack key={index}>
              <Stack
                direction="row"
                justifyContent="space-between"
                paddingX={isMobile ? 2 : 5} // Adjusted padding for mobile
                paddingY={0.2}
              >
                <Typography color="primary" variant="subtitle1">
                  {p.type}
                </Typography>
                <Typography color="primary" variant="subtitle1">
                  {p.price}
                </Typography>
              </Stack>
              <Divider />
            </Stack>
          ))
        ) : (
          <Stack gap={0.8}>
            {[...Array(4)].map((_, index) => (
              <Stack key={index} gap={0.8}>
                <Skeleton
                  sx={{ borderRadius: 4, alignSelf: 'center' }}
                  variant="rectangular"
                  height="25px"
                  width={isMobile ? '75%' : '85%'} // Adjusted width for mobile
                />
                <Divider />
              </Stack>
            ))}
          </Stack>
        )}
        {isLoadingSubjects ? (
          <Skeleton
            sx={{ borderRadius: 4, alignSelf: 'center', marginTop: 2 }}
            variant="rectangular"
            height={48}
            width={isMobile ? '60%' : '75%'} // Adjusted width for mobile
          />
        ) : (
          <Typography
            marginTop={2}
            color="primary"
            width={isMobile ? '80%' : 350} // Adjusted width for mobile
            textAlign="center"
            alignSelf="center"
          >
            {subjects.subjects}
          </Typography>
        )}
        <Chip
          onClick={() =>
            ana?.email && window.open(`mailto:${ana?.email}`, '_blank')
          }
          variant="outlined"
          color="primary"
          sx={{ alignSelf: 'center', marginTop: 10 }}
          icon={<Mail />}
          label={
            !isLoadingAna ? (
              <Typography>{ana?.email}</Typography>
            ) : (
              <Skeleton width={isMobile ? '50%' : 250.67} />
            )
          } // Adjusted width for mobile
        />
      </Stack>
    </Stack>
  );
};

export default PriceList;
