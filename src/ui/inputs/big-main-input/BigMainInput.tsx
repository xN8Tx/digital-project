import React from 'react';

import { IInputUIProps } from '../../../types/types';

import style from './BigMainInput.module.scss';

export default function BigMainInput({ placeholder, type, value, onChange }: IInputUIProps) {
  return (
    <input 
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={style.BigMainInput}
    />
  );
}