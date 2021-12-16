import React from 'react';
import moment from 'moment';

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
  categoryId: string,
  categoryName: string,
  establishmentName: string,
  transactionDate: string,
  amount: string,
};

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
}) => {

  return (
    <Touchable onPress={() => { }}>
      <DetailsItemWrapper>
        <DetailsItemIcon categoryName={categoryName} />
        <DetailsItemInfosWrapper>
          <DetailsItemInfos>
            <DetailsItemTitle categoryName={categoryName}>{establishmentName}</DetailsItemTitle>
            <DetailsItemDate>{moment(transactionDate).format('DD/MMM - HH:mm:ss')}</DetailsItemDate>
          </DetailsItemInfos>
        </DetailsItemInfosWrapper>
        <DetailsItemValue>{`R$ ${amount}`}</DetailsItemValue>
      </DetailsItemWrapper>
    </Touchable>
  );
};
