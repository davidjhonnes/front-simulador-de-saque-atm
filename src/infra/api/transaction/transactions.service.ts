import { AxiosResponse } from 'axios';
import { ServerResponse } from '../../../types/ServerResponse';
import api from '../../axios.config';
import { getToken } from '../../storage.local';
import { GenericError } from '../GenericError';
import { TransactionInterface } from './interfaces/transaction.interface';

export const create = async (
  body: TransactionInterface,
): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    const request = await api.post<ServerResponse<TransactionInterface>>(
      'transaction',
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return request;
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new GenericError(e).getError();
  }
};

export const findAll = async (params): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    const request = await api.get<ServerResponse<TransactionInterface[]>>(
      'transaction/list',
      {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return request;
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new GenericError(e).getError();
  }
};

const transactionsService = {
  create,
  findAll,
};

export default transactionsService;
