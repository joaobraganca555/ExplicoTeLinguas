import { useQuery } from 'react-query';
import client from '../api/pocketbase'; // Ensure this path is correct

const fetchAna = async () => {
  const response = await client
    .collection('ana')
    .getFirstListItem('name="Ana Moreira"');
  return response;
};

export const useFetchAna = () => {
  return useQuery('ana', fetchAna);
};
