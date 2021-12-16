import styled from 'styled-components/native';

import {View, Text} from '@vizir-banking/banking-app-core/dist/layout';

import {colorsByCategory} from '~/constants/categories';

type Props = {
  categoryName: string,
};

export const DetailsItemWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 24px;
`;

export const DetailsItemValue = styled(Text)`
  font-size: 16px;
  text-align: right;
  margin-left: auto;
`;

export const DetailsItemInfosWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

export const DetailsItemInfos = styled(View)`
  display: flex;
`;

export const DetailsItemTitle = styled(Text)`
  color: ${({categoryName}: Props) => colorsByCategory[categoryName] || '#411B71'};
  font-size: 16px;
  font-weight: bold;
`;

export const DetailsItemDate = styled(Text)`
  font-size: 12px;
`;
