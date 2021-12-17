import React, {useState} from 'react';
import moment from 'moment';
import withNavigation from '@vizir-banking/banking-app-core/dist/navigation/hocs/with-navigation/with-navigation';

import {Touchable} from '@vizir-banking/banking-app-core/dist/layout';

import {
  DetailsItemWrapper,
  DetailsItemValue,
  DetailsItemInfosWrapper,
  DetailsItemInfos,
  DetailsItemTitle,
  DetailsItemDate,
} from './DetailsItem.styles';

import {DetailsItemIcon} from '../DetailsItemIcon/DetailsItemIcon';

interface DetailsItemProps {
  // transactionId: string,
  categoryId: string;
  categoryName: string;
  establishmentName: string;
  transactionDate: string;
  amount: string;
  setModalStatus: (status: boolean) => void;
}

// transactionId: string
// categoryId: string,
// categoryName: string,
// establishmentName: string
// transactionDate: yyyy-dd-mmThh:mm:ss.sssZ
// amount: string ("12345.54")

export const DetailsItem: React.ComponentType<DetailsItemProps> = ({
  categoryName,
  establishmentName,
  transactionDate,
  amount,
  setModalStatus,
}) => {
  return (
    <Touchable onPress={() => setModalStatus(true)}>
      <DetailsItemWrapper>
        <DetailsItemIcon categoryName={categoryName} />
        <DetailsItemInfosWrapper>
          <DetailsItemInfos>
            <DetailsItemTitle categoryName={categoryName}>
              {establishmentName}
            </DetailsItemTitle>
            <DetailsItemDate>
              {moment(transactionDate).format('DD/MMM - HH:mm:ss')}
            </DetailsItemDate>
          </DetailsItemInfos>
        </DetailsItemInfosWrapper>
        <DetailsItemValue>{`R$ ${amount}`}</DetailsItemValue>
      </DetailsItemWrapper>
    </Touchable>
  );
};
