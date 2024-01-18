import { useContext, useEffect, useState } from 'react';
import authService from '../../infra/api/auth/auth.service';
import { AuthInterface } from '../../infra/api/auth/interfaces/auth.interface';
import { configToken } from '../../infra/axios.config';
import { setToken } from '../../infra/storage.local';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { Authorized, AuthorizedContextType } from '../../providers/Auth/types';

export default function useLogin() {
  // @ts-ignore
  const { user, saveAuth } = useContext<AuthorizedContextType>(AuthContext);
  const [loggedUser, setLoggedUser] = useState<Authorized>(null);

  const getUserData = () => {
    if (user) {
      setLoggedUser(user);
    }
  };
  const postLogin = async (authPost: AuthInterface): Promise<Authorized> => {
    // eslint-disable-next-line no-useless-catch
    try {
      const request = await authService.doLogin(authPost);
      if (request?.status <= 201) {
        const { data } = request.data;
        setLoggedUser(data);
        saveAuth(data);
        setToken(data.accessToken);
        configToken();
        return data;
      }
      return null;
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return {
    loggedUser,
    postLogin,
  };
}
