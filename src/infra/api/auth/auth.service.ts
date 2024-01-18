import { getConfig } from '@testing-library/react';
import { AxiosResponse } from 'axios';
import { ServerResponse } from '../../../types/ServerResponse';
import api from '../../axios.config';
import { getToken } from '../../storage.local';
import { GenericError } from '../GenericError';
import {
  AuthInterface,
  AuthReponseInterface,
} from './interfaces/auth.interface';

export const doLogin = async (
  credentials: AuthInterface,
): Promise<AxiosResponse> => {
  getConfig();
  try {
    const request = await api.post<ServerResponse<AuthReponseInterface>>(
      'auth',
      credentials,
    );
    return request;
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new GenericError(e).getError();
  }
};

export const validateToken = async (): Promise<AxiosResponse> => {
  try {
    getConfig();
    const token = await getToken();
    return await api.get<ServerResponse<AuthReponseInterface>>(
      'auth/validToken',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new GenericError(e).getError();
  }
};

const authService = {
  doLogin,
  validateToken,
};

export default authService;
