import styled from 'styled-components/native';
import { View, Text, Touchable, } from '@vizir-banking/banking-app-core/dist/layout';
export const CustomTouchable = styled(Touchable) `
  max-height: 30px;
  max-width: 50px;
`;
export const SelectorContainer = styled(View) `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px 0px;
  max-height: 50px;
`;
export const MonthName = styled(Text) `
  font-weight: bold;
  font-size: 28px;
  color: #411b71;
  margin: 0px 32px;
  min-width: 128px;
  text-align: center;
`;
