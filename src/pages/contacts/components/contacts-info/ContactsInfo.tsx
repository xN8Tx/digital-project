import React from 'react';
import { motion } from 'framer-motion';

import { ModalProps } from '../../../../types/types';
import { imageAnimation, textAnimation } from '../../../../animation/animations';

import PageArticle from '../../../../components/page-article/PageArticle';
import { MBigArticleText } from '../../../../ui/text/big-article-text/BigArticleText';
import { MSmallInfoText } from '../../../../ui/text/small-info-text/SmallInfoText';
import { MThickButton } from '../../../../ui/buttons/thick-button/ThickButton';

import './ContactInfo.scss';

type ContactsInfoProps = Pick<ModalProps, 'setIsModalOpen'>;

export default function ContactsInfo({ setIsModalOpen }: ContactsInfoProps) {
  const onModalOpen = () => setIsModalOpen(true);

  return (
    <div className="contacts__info">
      <PageArticle firstWord="контактная" secondWord="информация" />
      <motion.div variants={textAnimation} custom={2} className="contacts__info_text">
        <MBigArticleText>«Digital Project»</MBigArticleText>
        <MSmallInfoText>г. Москва, Фролов переулок 2</MSmallInfoText>
      </motion.div>
      <MBigArticleText variants={imageAnimation} custom={3}>
        +7 (999) 888-77-66
      </MBigArticleText>
      <MSmallInfoText variants={imageAnimation} custom={3}>
        digital@mail.ru
      </MSmallInfoText>
      <MThickButton variants={imageAnimation} custom={3} onClick={onModalOpen}>
        Обратная связь
      </MThickButton>
    </div>
  );
}
