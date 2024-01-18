import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-masked-input';
import { WithDrawPostInterface } from '../../../infra/api/withdraw/interfaces/withdraw';
import { nFormat } from '../../../util/util';
import ResultWithDraw from '../../molecules/result-withdraw/ResultWithDraw';

import { ModalWithdrawProps } from './types';

export default function ModalWidthdraw({
  atmSelected,
  isOpen,
  closeModal,
  onSendRequest,
  currentBalance,
  withdrawResult,
  errorMsg,
}: ModalWithdrawProps): React.JSX.Element {
  const [valAmount, setValAmount] = useState('');
  const [valAmountShow, setValAmountShow] = useState('');

  const [msgError, setMsgError] = useState(errorMsg);
  const balanceShow: string = nFormat.format(
    withdrawResult ? withdrawResult?.balanceCurrent : currentBalance,
  );
  const ValidateAmount = (): boolean => {
    try {
      const numberoff = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const val = valAmount.slice(-1);
      const finOff = numberoff.find((n) => val === n);
      return !finOff && parseInt(valAmount, 10) > 0;
    } catch {
      return false;
    }
  };
  const handleSendData = () => {
    setMsgError('');
    if (ValidateAmount()) {
      const req: WithDrawPostInterface = {
        // eslint-disable-next-line no-underscore-dangle
        atm: atmSelected._id,
        // eslint-disable-next-line radix
        value: parseInt(valAmount),
      };
      setValAmountShow(nFormat.format(req.value));
      onSendRequest(req);
      setValAmount('');
    } else {
      setMsgError(
        'Ops! Você só pode sacar valores cheios e compatível com as notas disponíveis',
      );
    }
  };
  const handleAmount = (value: string) => {
    const vla = value.split('.');
    setValAmount(vla[0] ? vla[0] : value);
  };
  useEffect(() => {
    setMsgError(errorMsg);
  }, [errorMsg, withdrawResult]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 w-max" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full mt-5 flex flex-col justify-center content-center items-center max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="text-lg text-xl font-bold leading-6 text-gray-900"
                >
                  Seu saldo atual é:
                  <br />
                  {balanceShow}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-md text-gray-500">
                    Você está sacando dinheiro no ATM:
                    <br />
                  </p>
                  <p className="text-xs font-bold text-gray-500">
                    {atmSelected?.name}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-md text-gray-500">
                    Digite abaixo o valor que deseja sacar:
                    <br />
                  </p>
                  <p className="mt-5 flex flex-col justify-center content-center items-center text-xs font-bold text-gray-500">
                    <CurrencyInput
                      value={valAmount}
                      defaultValue={valAmount}
                      name="amount"
                      required
                      separator=","
                      onChange={(e) => handleAmount(e.target.value)}
                      className="block px-2 w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </p>
                  <p className="mt-5 text-xs font-bold text-rose-700 text-center">
                    {msgError || ''}
                  </p>
                </div>
                {withdrawResult?.success && !msgError && (
                  <ResultWithDraw
                    resultWithDraw={withdrawResult.resultWithDraw}
                    balanceCurrent={balanceShow}
                    amountPulled={valAmountShow}
                  />
                )}
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      handleSendData();
                    }}
                  >
                    SACAR O DINHEIRO
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
