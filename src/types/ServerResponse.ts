export type ServerExeceptionResponse = {
  error: string;
  statusCode: number;
  message: string;
  friendlyMsg: string;
  timestamp: string;
  path: string;
};

export type ServerResponse<T> = {
  data?: T;
  success?: boolean;
  message?: string;
  statusCode?: number;
  errors?: string | null;
  response?: ServerExeceptionResponse;
};
