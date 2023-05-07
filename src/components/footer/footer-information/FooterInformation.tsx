import React from 'react';

import { routes } from '../../../routes/routes';

import FooterColumn from '../footer-column/FooterColumn';
import FooterList from '../footer-list/FooterList';
import FooterItem from '../footer-information-item/FooterInformationItem';

import './FooterInformation.scss';

export default function FooterInformation() {
  return (
    <FooterColumn title="Информация">
      <FooterList>
        {routes.map((route, index) => {
          if (route.isShowed) {
            return (
              <FooterItem key={index} to={route.path}>
                {route.name}
              </FooterItem>
            );
          }
          return null;
        })}
      </FooterList>
    </FooterColumn>
  );
}
