export type UserAccessProps = {
  isValidAccess: true;
};

export type UserAccessContextProps = {
  accessPermission: UserAccessProps;
  setAccessPermission: (UserAccessProps) => null;
};
