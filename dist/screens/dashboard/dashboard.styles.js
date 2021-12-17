import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { Text, View } from '@vizir-banking/banking-app-core/dist/layout';
export const LoadingScreen = styled(ActivityIndicator) `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #c6c6c6;
  opacity: 0.5;
`;
export const CardContainer = styled(View) `
  justify-content: center;
  align-items: center;
`;
export const CardRow = styled(View) `
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;
export const InfoContainer = styled.View `
  justify-content: flex-start;
`;
export const ValueText = styled(Text) `
  font-weight: bold;
  color: ${({ color }) => (color ? color : '#000')};
  font-size: 20px;
`;
export const InfoTitle = styled(Text) `
  font-size: 16px;
`;
export const InfoBlock = styled(View) `
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled(Text) `
  font-size: 17px;
  margin-bottom: 8px;
  font-weight: bold;
`;
export const GraphContainer = styled(View) `
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
export const LegendCircle = styled.View `
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`;
export const Container = styled.ScrollView `
  flex: 1;
  height: 100%;
`;
export const NamedLegend = styled(View) `
  flex-direction: row;
  align-items: center;
`;
