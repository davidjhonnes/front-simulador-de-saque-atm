import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../infra/storage.local';
import Page from '../organisms/page/Page';
import { ApplicationLayoutProp } from './types';

export default function ApplicationLayout({
  balanceCurrent,
  title,
  children,
  userSession,
}: ApplicationLayoutProp): React.JSX.Element {
  const navigation = useNavigate();
  const onLogout = () => {
    setToken(null);
    navigation('/login');
  };
  return (
    <div className="min-h-full">
      <Page
        sessionUser={userSession}
        onLogout={onLogout}
        balanceCurrent={balanceCurrent}
        title={title}
      >
        {children}
      </Page>
    </div>
  );
}
