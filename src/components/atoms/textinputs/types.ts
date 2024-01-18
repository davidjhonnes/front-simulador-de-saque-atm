export interface ButtonProp {
  value?: string;
  onChange?: (e: any) => void;
  mask?: string;
  onBlur?: () => void;
  className?: string;
  required?: boolean;
  type?: string;
}
