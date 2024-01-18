import { AxiosError } from 'axios';
import {
  ServerExeceptionResponse,
  ServerResponse,
} from '../../types/ServerResponse';

export interface GenericErrorInterface {
  errorAPi: ServerResponse<ServerExeceptionResponse> | AxiosError;
  getError: () => ServerExeceptionResponse | AxiosError;
}

export class GenericError extends Error implements GenericErrorInterface {
  errorAPi: ServerExeceptionResponse | AxiosError;

  constructor(erro: ServerExeceptionResponse | AxiosError) {
    super(erro.message);
    this.errorAPi = erro;
  }

  getError(): ServerExeceptionResponse | AxiosError {
    const erro = this.errorAPi;
    if (erro instanceof AxiosError) {
      return erro.response.data as ServerExeceptionResponse;
    }
    return this.errorAPi;
  }
}
