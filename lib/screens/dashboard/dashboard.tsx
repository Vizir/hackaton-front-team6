import React from 'react';
import {MonthSelector} from '~/components/monthSelector/monthSelector';
import {Card} from '~/components/card/card';
import {Text, View} from '@vizir-banking/banking-app-core/dist/layout';
import {Upload, Download} from '@vizir-banking/design-system';
import {StyleSheet} from 'react-native';

import {
  InfoContainer,
  ValueText,
  CardContainer,
  CardRow,
  InfoTitle,
  InfoBlock,
} from './dashboard.styles';

interface DashboardProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
}

const Dashboard: React.ComponentType<DashboardProps> = ({
  monthHandler,
  displayMonth,
}) => {
  return (
    <>
      <View>
        <MonthSelector
          displayMonth={displayMonth}
          monthHandler={monthHandler}
        />
      </View>
      <Card>
        <CardContainer>
          <InfoContainer>
            <InfoTitle>Balanço Mensal</InfoTitle>
            <ValueText>R$ 4.000,00</ValueText>
          </InfoContainer>
          <CardRow>
            <Download width={24} color="green" />
            <InfoContainer>
              <InfoTitle>Receitas</InfoTitle>
              <ValueText color="#19B93D">R$ 5.000,00</ValueText>
            </InfoContainer>
            <Upload width={24} color="red" />
            <InfoContainer>
              <InfoTitle>Despesas</InfoTitle>
              <ValueText color="#F80C0C">R$ 1.000,00</ValueText>
            </InfoContainer>
          </CardRow>
        </CardContainer>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 20,
    width: 40,
    backgroundColor: '#19B93D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Dashboard};
