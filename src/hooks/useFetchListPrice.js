import { useQuery } from 'react-query';
import client from '../api/pocketbase'; // Ensure this path is correct

const fetchListPrice = async () => {
  const response = await client.collection('precos').getFullList();
  return response;
};

const fetchSubjects = async () => {
  const response = await client
    .collection('disciplinas')
    .getFirstListItem('id="g1kjmj0udx31chg"');
  return response;
};

export const useFetchListPrice = () => {
  return useQuery('precos', fetchListPrice, {
    retry: false,
    refetchOnWindowFocus: false
  });
};

export const useFetchSubjects = () => {
  return useQuery('disciplinas', fetchSubjects, {
    retry: false,
    refetchOnWindowFocus: false
  });
};
