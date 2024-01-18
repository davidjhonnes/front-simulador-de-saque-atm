import type { SizeMainTypes, StyleMainTypes } from './types';

export const bgStyle: StyleMainTypes = {
  primary: 'bg-fuchsia-800 text-white',
  default: 'bg-fuchsia-200 text-fuchsia-800',
  secundarie: 'bg-fuchsia-300 text-current',
};

export const sizeStyle: SizeMainTypes = {
  lg: 'h-12 text-lg',
  md: 'h-8 text-base',
  sm: 'h-5 text-sm',
  fulll: 'w-full',
};

export const buttonStyle: string =
  'flex w-fit justify-center items-center rounded-md px-3 py-1.5 font-semibold leading-6 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
