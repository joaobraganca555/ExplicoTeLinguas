import { useQuery } from 'react-query';
import client from '../api/pocketbase'; // Ensure this path is correct

const fetchSchedules = async () => {
  const response = await client.collection('horarios').getFullList();
  return response;
};

export const useFetchSchedules = () => {
  return useQuery('horarios', fetchSchedules);
};
