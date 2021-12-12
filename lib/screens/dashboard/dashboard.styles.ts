import styled from 'styled-components/native';
import {Text, View} from '@vizir-banking/banking-app-core/dist/layout';

type ValueTextProps = {
  color?: string;
};

export const CardContainer = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const CardRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export const InfoContainer = styled.View`
  justify-content: flex-start;
`;

export const ValueText = styled(Text)<ValueTextProps>`
  font-weight: bold;
  color: ${({color}) => (color ? color : '#000')};
  font-size: 20px;
`;

export const InfoTitle = styled(Text)`
  font-size: 16px;
`;

export const InfoBlock = styled(View)`
  justify-content: center;
`;
