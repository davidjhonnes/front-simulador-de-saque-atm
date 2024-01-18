import React from 'react';
// @ts-ignore
import img10 from '../../../assets/img/cedula-10.png';
// @ts-ignore
import img100 from '../../../assets/img/cedula-100.png';
// @ts-ignore
import img20 from '../../../assets/img/cedula-20.png';
// @ts-ignore
import img50 from '../../../assets/img/cedula-50.png';
import { ResultWithDrawInterface } from '../../../infra/api/withdraw/interfaces/withdraw';
import Cedula from '../../atoms/cedules/Cedula';

export interface ResultWithDrawProps {
  resultWithDraw: ResultWithDrawInterface;
  amountPulled: string;
  balanceCurrent: string;
}

export default function ResultWithDraw({
  resultWithDraw,
  amountPulled,
  balanceCurrent,
}: ResultWithDrawProps): React.JSX.Element {
  return (
    <div className="mt-5 flex flex-col justify-center content-center items-center">
      <h1 className="text-md text-gray-500">
        Saque bem sucedido:
        <br />
      </h1>
      <div className="mt-5 mb-5  grid grid-flow-col auto-rows-max gap-x-6 gap-y-10 justify-start text-xs font-bold text-gray-500">
        {resultWithDraw?.withdrawnNotes['100'] > 0 && (
          <Cedula
            imgCedula={img100}
            qtdCedulas={resultWithDraw?.withdrawnNotes['100']}
          />
        )}
        {resultWithDraw?.withdrawnNotes['50'] > 0 && (
          <Cedula
            imgCedula={img50}
            qtdCedulas={resultWithDraw?.withdrawnNotes['50']}
          />
        )}
        {resultWithDraw?.withdrawnNotes['20'] > 0 && (
          <Cedula
            imgCedula={img20}
            qtdCedulas={resultWithDraw?.withdrawnNotes['20']}
          />
        )}
        {resultWithDraw?.withdrawnNotes['10'] > 0 && (
          <Cedula
            imgCedula={img10}
            qtdCedulas={resultWithDraw?.withdrawnNotes['10']}
          />
        )}
      </div>
      <p className="text-xl font-bold text-black ">
        Valor Sacado: <span className="text-red-600">- R$ {amountPulled}</span>
      </p>
      <p className="text-xl font-bold text-black ">
        Saldo Atual: <span className="text-blue-700">{balanceCurrent}</span>
      </p>
    </div>
  );
}
