export type Authorized = {
  name: string;
  accessToken: string;
};

export type AuthorizedContextType = {
  user: Authorized;
  saveAuth: (authorized: Authorized) => void;
};
