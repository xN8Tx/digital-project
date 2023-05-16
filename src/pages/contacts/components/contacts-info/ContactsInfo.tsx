import React from 'react';

import { ModalProps } from '../../../../types/types';

import PageArticle from '../../../../components/page-article/PageArticle';
import BigArticleText from '../../../../ui/text/big-article-text/BigArticleText';
import SmallInfoText from '../../../../ui/text/small-info-text/SmallInfoText';
import ThickButton from '../../../../ui/buttons/thick-button/ThickButton';

import './ContactInfo.scss';

type ContactsInfoProps = Pick<ModalProps, 'setIsModalOpen'>;

export default function ContactsInfo({ setIsModalOpen }: ContactsInfoProps) {
  const onModalOpen = () => setIsModalOpen(true);

  return (
    <div className="contacts__info">
      <PageArticle firstWord="контактная" secondWord="информация" />
      <div className="contacts__info_text">
        <BigArticleText>«Digital Project»</BigArticleText>
        <SmallInfoText>г. Москва, Фролов переулок 2</SmallInfoText>
      </div>
      <BigArticleText>+7 (999) 888-77-66</BigArticleText>
      <SmallInfoText>digital@mail.ru</SmallInfoText>
      <ThickButton onClick={onModalOpen}>Обратная связь</ThickButton>
    </div>
  );
}
