import React from 'react';

import FirstCertificate from '../../../../assets/images/FirstCertificate.png';
import SecondCertificate from '../../../../assets/images/SecondCertificate.png';
import ThirdCertificate from '../../../../assets/images/ThirdCertificate.png';

import './CertificateList.scss';

export default function CertificateList() {
  return (
    <div className="certificate__list">
      <img src={FirstCertificate} alt="" />
      <img src={SecondCertificate} alt="" />
      <img src={ThirdCertificate} alt="" />
    </div>
  );
}
