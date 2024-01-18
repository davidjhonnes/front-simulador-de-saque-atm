import { useContext, useMemo, useState } from 'react';
import { UserAccessContext } from './UserAccessContext';

export function UserAccess(props) {
  const [accessPermission, setAccessPermission] = useState<boolean>(null);

  const value: any = useMemo(
    () => ({
      setAccessPermission,
      accessPermission,
    }),
    [accessPermission],
  );

  // @ts-ignore
  return <UserAccessContext.Provider value={value} {...props} />;
}

export const useUserAccessContext = () => useContext(UserAccessContext);

export default UserAccess;
