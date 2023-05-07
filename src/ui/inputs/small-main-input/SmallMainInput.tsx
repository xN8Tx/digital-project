import React from 'react';

import { IInputUIProps } from '../../../types/types';

import style from './SmallMainInput.module.scss';

export default function SmallMainInput({
  placeholder, type, value, onChange,
}: IInputUIProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={style.SmallMainInput}
    />
  );
}
