import React from 'react';

import { InputUIProps } from '../../../types/types';

import style from './BigMainInput.module.scss';

export default function BigMainInput({ placeholder, value, onChange }: InputUIProps) {
  return <textarea value={value} onChange={onChange} placeholder={placeholder} className={style.BigMainInput} />;
}
