// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { bgStyle, buttonStyle, sizeStyle } from './style';
import { type ButtonProp, SizeEnum, StylesEnum } from './types';

export default function Button({
  size,
  color,
  text,
  onClick,
  className,
}: ButtonProp) {
  let bg: string;
  if (color === StylesEnum.primary) {
    bg = bgStyle[StylesEnum.primary];
  } else {
    bg =
      color === StylesEnum.secundary
        ? bgStyle[StylesEnum.primary]
        : bgStyle[StylesEnum.default];
  }
  let sz: string;
  if (size === SizeEnum.lg) {
    sz = sizeStyle[SizeEnum.lg];
  } else if (size === SizeEnum.sm) {
    sz = sizeStyle[SizeEnum.sm];
  } else {
    sz =
      size === SizeEnum.full
        ? sizeStyle[SizeEnum.full]
        : sizeStyle[SizeEnum.md];
  }

  return (
    <button
      className={`${buttonStyle} ${bg} ${sz} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
