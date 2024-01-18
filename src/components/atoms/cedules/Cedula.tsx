import React from 'react';

export interface CedulaProps {
  qtdCedulas: number;
  imgCedula: string;
}

export default function Cedula({
  qtdCedulas,
  imgCedula,
}: CedulaProps): React.JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center content-centerp-1">
      <img
        src={imgCedula}
        alt=""
        className="w-1/2 object-cover object-center  shadow-md "
      />
      <b className="mt-1 text-sm">{qtdCedulas}</b>
      <div className="text-xs">céudula(s)</div>
    </div>
  );
}
