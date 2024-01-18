import { AxiosResponse } from 'axios';
import { ServerResponse } from '../../../types/ServerResponse';
import api from '../../axios.config';
import { getToken } from '../../storage.local';
import { GenericError } from '../GenericError';
import {
  WithDrawPostInterface,
  WithDrawResponseInterface,
} from './interfaces/withdraw';

export const create = async (
  body: WithDrawPostInterface,
): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    const request = await api.post<ServerResponse<WithDrawResponseInterface>>(
      'withdraw',
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

const withdrawService = {
  create,
};

export default withdrawService;
