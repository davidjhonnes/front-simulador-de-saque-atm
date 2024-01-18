// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import AtmItem from '../../components/atoms/atm/AtmItem';
import ModalWidthdraw from '../../components/organisms/modal-withdraw/ModalWidthdraw';
import ApplicationLayout from '../../components/template/ApplicationLayout';
import useAccount from '../../hooks/account';
import atmServices from '../../infra/api/atm/atm.service';
import { AtmReponseInterface } from '../../infra/api/atm/interfaces/atm.interface';
import {
  WithDrawPostInterface,
  WithDrawResponseInterface,
} from '../../infra/api/withdraw/interfaces/withdraw';
import withdrawService from '../../infra/api/withdraw/withdraw.service';
import { ServerResponse } from '../../types/ServerResponse';

export default function Withdraw(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [atmSelected, setAtmSelected] = useState<AtmReponseInterface>(null);
  const [withdrawResult, setWithdrawResult] =
    useState<WithDrawResponseInterface>();

  const openModal = (atm: AtmReponseInterface) => {
    setAtmSelected(atm);
    setIsOpen(true);
  };

  const { myAccount, refreshAccount } = useAccount();
  const [atmList, setAtmList] = useState<AtmReponseInterface[]>([]);
  const [msgError, setMsgError] = useState<string>(null);
  const calAtmservice = async (): Promise<void> => {
    try {
      const { data }: AxiosResponse<ServerResponse<AtmReponseInterface[]>> =
        await atmServices.listAll();
      setAtmList(data?.data);
    } catch (e) {
      /* empty */
    }
  };
  const closeModal = async () => {
    await calAtmservice();
    setIsOpen(false);
  };
  const handleSendRequest = async (post: WithDrawPostInterface) => {
    try {
      setMsgError('');
      const { data }: AxiosResponse<ServerResponse<WithDrawResponseInterface>> =
        await withdrawService.create(post);
      await refreshAccount();
      setWithdrawResult(data.data);
    } catch (e) {
      setMsgError(e.friendlyMsg || e.message);
    }
  };
  useEffect(() => {
    calAtmservice();
  }, []);
  return (
    <ApplicationLayout
      balanceCurrent={myAccount?.currentBalanceAccount}
      title="Saque"
      userSession={myAccount}
    >
      <div className="bg-white">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Selecione o caixa eletrônico
        </h2>
        <div className="mx-auto max-w-3xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <ModalWidthdraw
            withdrawResult={withdrawResult}
            atmSelected={atmSelected}
            closeModal={closeModal}
            isOpen={!!atmSelected && isOpen}
            onSendRequest={handleSendRequest}
            currentBalance={myAccount?.currentBalanceAccount}
            errorMsg={msgError}
          />
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {atmList?.map((producnt: AtmReponseInterface) => (
              <AtmItem atmItem={producnt} onSelectAtm={(a) => openModal(a)} />
            ))}
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}
