import { AuthAccountResponseInterface } from '../../infra/api/auth/interfaces/auth.interface';

export interface ApplicationLayoutProp {
  title: string;
  children: React.JSX.Element;
  balanceCurrent: number;
  userSession: AuthAccountResponseInterface;
}
