import { AxiosResponse } from 'axios';
import { ServerResponse } from '../../../types/ServerResponse';
import api from '../../axios.config';
import { getToken } from '../../storage.local';
import {
  AtmPostInterface,
  AtmReponseInterface,
} from './interfaces/atm.interface';

export const create = async (
  body: AtmPostInterface,
): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    return await api.post<ServerResponse<AtmReponseInterface>>('atm', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    return null;
  }
};

export const listAll = async (): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    return await api.get<ServerResponse<AtmReponseInterface[]>>('atm', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    return null;
  }
};

const atmServices = {
  listAll,
  create,
};

export default atmServices;
