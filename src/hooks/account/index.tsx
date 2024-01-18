import { useEffect, useState } from 'react';
import { getMyAccount } from '../../infra/api/auth/account.service';
import { AuthAccountResponseInterface } from '../../infra/api/auth/interfaces/auth.interface';

export default function useAccount() {
  const [myAccount, setMyAccount] =
    useState<AuthAccountResponseInterface>(null);

  const getAccount = async () => {
    const { data } = await getMyAccount();
    setMyAccount(data?.data);
  };

  const refreshAccount = async () => {
    await getMyAccount();
  };
  useEffect(() => {
    getAccount();
  }, []);

  return { myAccount, refreshAccount };
}
