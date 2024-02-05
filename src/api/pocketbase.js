import PocketBase from 'pocketbase';
import { pocketUrl } from '../constants/pocketbase';

const client = new PocketBase(pocketUrl);

export default client;
