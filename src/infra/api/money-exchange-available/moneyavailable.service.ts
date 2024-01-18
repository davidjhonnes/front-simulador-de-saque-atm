import { AxiosResponse } from 'axios';
import { ServerResponse } from '../../../types/ServerResponse';
import api from '../../axios.config';
import { getToken } from '../../storage.local';
import {
  MoneyAvailablePostInterface,
  MoneyAvailableReponseInterface,
} from './interfaces/moneyavailable.interface';

export const create = async (
  body: MoneyAvailablePostInterface,
): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    return await api.post<ServerResponse<MoneyAvailableReponseInterface>>(
      'money-exchange-available',
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (e) {
    return null;
  }
};

export const findAll = async (): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    return await api.get<ServerResponse<MoneyAvailableReponseInterface[]>>(
      'money-exchange-available',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (e) {
    return null;
  }
};

export const findByAtm = async (atmId: string): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    return await api.get<ServerResponse<MoneyAvailableReponseInterface[]>>(
      `money-exchange-available/checkNotes/${atmId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (e) {
    return null;
  }
};
