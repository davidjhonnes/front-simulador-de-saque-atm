import * as React from 'react';
import { useMemo } from 'react';
import { Authorized, AuthorizedContextType } from './types';

export const AuthContext = React.createContext<AuthorizedContextType | null>(
  null,
);

function AuthContextProvider({ children }) {
  const [user, setUser] = React.useState<Authorized>();
  const saveAuth = (a: Authorized) => {
    const newTodo: Authorized = {
      accessToken: a.accessToken,
      name: a.name,
    };
    setUser(newTodo);
  };
  const providerValue = useMemo(
    () => ({
      user,
      saveAuth,
    }),
    [user, saveAuth],
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
