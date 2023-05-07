import React from 'react';

import { InputUIProps } from '../../../types/types';

import style from './SmallMainInput.module.scss';

export default function SmallMainInput({ placeholder, type, value, onChange }: InputUIProps) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={style.SmallMainInput} />
  );
}
