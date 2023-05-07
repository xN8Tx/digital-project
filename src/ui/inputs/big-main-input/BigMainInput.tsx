import React from 'react';

import { InputUIProps } from '../../../types/types';

import style from './BigMainInput.module.scss';

export default function BigMainInput({ placeholder, type, value, onChange }: InputUIProps) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={style.BigMainInput} />
  );
}
