import React from 'react';

import CertificateList from '../certificate-list/CertificateList';
import PageArticle from '../../../../components/page-article/PageArticle';

import './CertificateWrapper.scss';

export default function CertificateWrapper() {
  return (
    <section className="certificate__wrapper">
      <PageArticle firstWord="сертификаты" secondWord="компании" />
      <CertificateList />
    </section>
  );
}
