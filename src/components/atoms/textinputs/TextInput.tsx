import React from 'react';
import InputMask from 'react-input-mask';
import { ButtonProp } from './types';

export default function TextInput({
  value,
  onChange,
  mask,
  onBlur,
  className,
  required,
  type,
}: ButtonProp): React.JSX.Element {
  return (
    <InputMask
      mask={mask}
      value={value}
      onChange={onChange}
      className={className}
      autoComplete="off"
      required={required}
      {...onBlur}
      type={type}
    />
  );
}
