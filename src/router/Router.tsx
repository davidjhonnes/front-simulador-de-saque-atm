import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import authService from '../infra/api/auth/auth.service';
import { setToken } from '../infra/storage.local';
import { useUserAccessContext } from '../providers/UserAccess';
import PrivateRoutes from './PrivateRoutes';

const WithDraw = lazy(() => import('../pages/withdraw/Withdraw'));
const Transaction = lazy(() => import('../pages/transactions/Transactions'));
const AuthLogin = lazy(() => import('../pages/auth/AuthLogin'));

function Router(): React.JSX.Element {
  const { accessPermission, setAccessPermission } = useUserAccessContext();

  const getPermission = async () => {
    if (window.location.href.includes('public')) {
      return;
    }
    try {
      const resp = await authService.validateToken();
      setAccessPermission({
        isValidAccess: Boolean(resp.data.data.isTokenValid),
      });
    } catch (error) {
      setToken(null);
      setAccessPermission({
        isValidAccess: false,
      });
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<AuthLogin />} />
      <Route
        path="/"
        element={
          <PrivateRoutes isAuthenticated={accessPermission?.isValidAccess}>
            <WithDraw />
          </PrivateRoutes>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoutes isAuthenticated={accessPermission?.isValidAccess}>
            <WithDraw />
          </PrivateRoutes>
        }
      />
      <Route
        path="/transactions"
        element={
          <PrivateRoutes isAuthenticated={accessPermission?.isValidAccess}>
            <Transaction />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default Router;
