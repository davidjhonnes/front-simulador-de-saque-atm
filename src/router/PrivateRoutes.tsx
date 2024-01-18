import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ isAuthenticated, children }): React.JSX.Element {
  return isAuthenticated ? <Navigate to="/login" /> : children;
}

export default PrivateRoutes;
