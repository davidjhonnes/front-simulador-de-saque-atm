import { createContext } from 'react';
import { UserAccessContextProps } from './types';

export const UserAccessContext = createContext<UserAccessContextProps>({
  accessPermission: null,
  setAccessPermission: () => null,
});
