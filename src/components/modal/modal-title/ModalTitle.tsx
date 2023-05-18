import React from 'react';

import { ModalProps } from '../../../types/types';

import BigInfoText from '../../../ui/text/big-info-text/BigInfoText';

import Close from '../../../assets/svg/Close.svg';

import './ModalTitle.scss';

export default function ModalTitle({ isModalOpen, setIsModalOpen }: ModalProps) {
  const onModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal__title">
      <BigInfoText>Связаться с нами</BigInfoText>
      <button type="button" className="modal__title_close" onClick={onModalOpen}>
        <img src={Close} alt="" />
      </button>
    </div>
  );
}
