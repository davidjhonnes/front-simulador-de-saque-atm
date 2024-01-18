import { AxiosResponse } from 'axios';
import { ServerResponse } from '../../../types/ServerResponse';
import api, { apiError } from '../../axios.config';
import { getToken } from '../../storage.local';
import { AuthAccountResponseInterface } from './interfaces/auth.interface';

export const getMyAccount = async (): Promise<AxiosResponse> => {
  try {
    const token = await getToken();
    return await api.get<ServerResponse<AuthAccountResponseInterface>>(
      'account/profile/myAccount',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (e) {
    apiError(e);
    return e;
  }
};
