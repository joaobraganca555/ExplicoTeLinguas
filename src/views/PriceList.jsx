import { Chip, Divider, Skeleton, Stack, Typography } from '@mui/material';
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

  if (isErrorListPrice || isErrorSubjects || isErrorAna) return <Error />;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 100px)"
      gap={3}
    >
      <Stack>
        <Typography
          lineHeight={0.7}
          variant="h2"
          color="primary"
          fontFamily="Catchy Mager"
        >
          Tabela de Preços
        </Typography>
        <Typography alignSelf="end" color="primary">
          *por hora
        </Typography>
      </Stack>

      <Stack>
        <Chip
          color="primary"
          label="EXPLICAÇÕES"
          size="medium"
          sx={{
            width: '420px',
            fontSize: '15px',
            letterSpacing: '2px',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}
        />
        {!isLoadingListPrice ? (
          <>
            {prices.map((p, index) => (
              <Stack key={index}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingX={5}
                  paddingY={0.2}
                >
                  <Typography color="primary" variant="h6">
                    {p.type}
                  </Typography>
                  <Typography color="primary" variant="h6">
                    {p.price}
                  </Typography>
                </Stack>
                <Divider />
              </Stack>
            ))}
          </>
        ) : (
          <Stack gap={0.8}>
            {[...Array(4)].map((_, index) => (
              <Stack key={index} gap={0.8}>
                <Skeleton
                  sx={{ borderRadius: 4, alignSelf: 'center' }}
                  variant="rectangular"
                  height="25px"
                  width="85%"
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
            width="75%"
          />
        ) : (
          <Typography
            marginTop={2}
            color="primary"
            width={350}
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
              <Skeleton width={250.67} />
            )
          }
        />
      </Stack>
    </Stack>
  );
};

export default PriceList;
