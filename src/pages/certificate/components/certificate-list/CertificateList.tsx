import React from 'react';

import FirstCertificate from '../../../../assets/images/FirstCertificate.png';
import SecondCertificate from '../../../../assets/images/SecondCertificate.png';
import ThirdCertificate from '../../../../assets/images/ThirdCertificate.png';
import LazyImg from '../../../../ui/images/LazyImg';

import './CertificateList.scss';

export default function CertificateList() {
  return (
    <div className="certificate__list">
      <LazyImg src={FirstCertificate} alt="Сертификат" className="certificate__image" />
      <LazyImg src={SecondCertificate} alt="Сертификат" className="certificate__image" />
      <LazyImg src={ThirdCertificate} alt="Сертификат" className="certificate__image" />
    </div>
  );
}
