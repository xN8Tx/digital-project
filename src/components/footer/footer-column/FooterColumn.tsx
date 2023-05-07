import React from 'react';

import './FooterColumn.scss';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="footer__column">
      <h2 className="footer__article">{title}</h2>
      {children}
    </div>
  );
}
