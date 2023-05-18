import React from 'react';

import { ModalProps } from '../../types/types';

import ModalWrapper from './modal-wrapper/ModalWrapper';

import './Modal.scss';

export default function Modal({ isModalOpen, setIsModalOpen }: ModalProps) {
  return (
    <section className="modal" data-close={isModalOpen}>
      <ModalWrapper isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
}
