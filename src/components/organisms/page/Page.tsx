import React from 'react';
import Content from '../../molecules/content/Content';
import HeaderNav from '../../molecules/headernav/HeaderNav';
import { PageProps } from './types';

export default function Page({
  sessionUser,
  onLogout,
  balanceCurrent,
  children,
  title,
}: PageProps): React.JSX.Element {
  return (
    <>
      <HeaderNav
        sessionUser={sessionUser}
        onLogout={onLogout}
        balanceCurrent={balanceCurrent}
      />
      <Content title={title}>{children}</Content>
    </>
  );
}
