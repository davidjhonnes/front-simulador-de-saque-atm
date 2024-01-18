import React from 'react';
import { AuthAccountResponseInterface } from '../../../infra/api/auth/interfaces/auth.interface';

export interface PageProps {
  sessionUser: AuthAccountResponseInterface;
  onLogout: () => void;
  balanceCurrent: number;
  children: React.JSX.Element;
  title: string;
}
