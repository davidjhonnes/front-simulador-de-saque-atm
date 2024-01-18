import React from 'react';
// @ts-ignore
import imgAtm from '../../../assets/img/atm-sacar-image.png';
// @ts-ignore
import img10 from '../../../assets/img/cedula-10.png';
// @ts-ignore
import img100 from '../../../assets/img/cedula-100.png';
// @ts-ignore
import img20 from '../../../assets/img/cedula-20.png';
// @ts-ignore
import img50 from '../../../assets/img/cedula-50.png';

import { AtmReponseInterface } from '../../../infra/api/atm/interfaces/atm.interface';

export type AtmItemProp = {
  atmItem: AtmReponseInterface;
  onSelectAtm: (atm: AtmReponseInterface) => void;
};
export default function AtmItem({
  atmItem,
  onSelectAtm,
}: AtmItemProp): React.JSX.Element {
  const { serialCode, name, address, cep, city, uf, moneyAvailable } = atmItem;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      key={serialCode}
      className="group relative shadow-md p-5"
      onClick={() => onSelectAtm(atmItem)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imgAtm}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h2 className="md text-gray-700 text-blue-950 font-bold">
            <a href="#atmscreen">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h2>
          <h3 className="mt-2 text-sm text-gray-700">
            {address}, {city}-{uf}
            <br />
            {cep}
          </h3>
        </div>
      </div>
      <div className="bg-fuchsia-800 mt-1 text-sm text-center w-full text-white p-2">
        Cédulas Disponíveis
      </div>
      <div className="mt-4 flex flex-row justify-between">
        {moneyAvailable.notes100 > 0 && (
          <div className="flex flex-col justify-center items-center content-center">
            <img
              src={img100}
              alt=""
              className="w-16 object-cover object-center"
            />
            <b className="mt-1 text-sm">{moneyAvailable.notes100}</b>
            <div className="text-xs">céudulas</div>
          </div>
        )}
        {moneyAvailable.notes50 > 0 && (
          <div className="flex flex-col justify-center items-center content-center">
            <img
              src={img50}
              alt=""
              className="w-16 object-cover object-center"
            />
            <b className="mt-1 text-sm">{moneyAvailable.notes50}</b>
            <div className="text-xs">céudulas</div>
          </div>
        )}
        {moneyAvailable.notes20 > 0 && (
          <div className="flex flex-col justify-center items-center content-center">
            <img
              src={img20}
              alt=""
              className="w-16 object-cover object-center"
            />
            <b className="mt-1 text-sm">{moneyAvailable.notes20}</b>
            <div className="text-xs">céudulas</div>
          </div>
        )}
        {moneyAvailable.notes10 > 0 && (
          <div className="flex flex-col justify-center items-center content-center">
            <img
              src={img10}
              alt=""
              className="w-16 object-cover object-center"
            />
            <b className="mt-1 text-sm">{moneyAvailable.notes10}</b>
            <div className="text-xs">céudulas</div>
          </div>
        )}
      </div>
    </div>
  );
}
