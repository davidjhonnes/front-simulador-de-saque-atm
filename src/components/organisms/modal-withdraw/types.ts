import { AtmReponseInterface } from '../../../infra/api/atm/interfaces/atm.interface';
import {
  WithDrawPostInterface,
  WithDrawResponseInterface,
} from '../../../infra/api/withdraw/interfaces/withdraw';

export interface ModalWithdrawProps {
  atmSelected: AtmReponseInterface;
  closeModal: () => void;
  isOpen: boolean;
  onSendRequest: (w: WithDrawPostInterface) => void;
  currentBalance: number;
  withdrawResult: WithDrawResponseInterface;
  errorMsg: string;
}
