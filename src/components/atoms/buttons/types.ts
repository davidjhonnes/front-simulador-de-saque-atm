export enum SizeEnum {
  'lg' = 'lg',
  'md' = 'md',
  'sm' = 'sm',
  'full' = 'full',
}

export enum StylesEnum {
  'primary' = 'primary',
  'secundary' = 'secundary',
  'default' = 'default',
}

export interface SizeMainTypes {
  lg: string;
  md: string;
  sm: string;
  fulll: string;
}

export interface ButtonProp {
  size: string;
  color: string;
  text: string;
  onClick: () => void;
  className?: string;
}

export interface StyleMainTypes {
  primary: string;
  secundarie: string;
  default: string;
}
