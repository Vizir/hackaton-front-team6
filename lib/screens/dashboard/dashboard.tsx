import React, {useState} from 'react';
import {MonthSelector} from '~/components/monthSelector/monthSelector';
import {Card} from '~/components/card/card';
import {Text, View} from '@vizir-banking/banking-app-core/dist/layout';
import {Upload, Download} from '@vizir-banking/design-system';
import {StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {
  InfoContainer,
  ValueText,
  CardContainer,
  CardRow,
  InfoTitle,
  InfoBlock,
  Title,
  GraphContainer,
  LegendCircle,
  Container,
  NamedLegend,
} from './dashboard.styles';

interface DashboardProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
}

const widthAndHeight = 250;
const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

const apimock: DashboardData = {
  incomeAmount: '1234.56',
  expenseAmount: '1234.56',
  balanceAmount: '1234.56',
  categories: [
    {
      categoryId: '34',
      categoryName: 'Compras Online',
      amount: '100.0',
      percentage: 10,
    },
    {
      categoryId: '34',
      categoryName: 'Alimentação',
      amount: '300.0',
      percentage: 30,
    },
    {
      categoryId: '34',
      categoryName: 'Lazer',
      amount: '900.0',
      percentage: 60,
    },
  ],
};

interface DashboardData {
  incomeAmount: string;
  expenseAmount: string;
  balanceAmount: string;
  categories: {
    categoryId: string;
    categoryName: string;
    amount: string;
    percentage: number;
  }[];
}

const Dashboard: React.ComponentType<DashboardProps> = ({
  monthHandler,
  displayMonth,
}) => {
  const [data, setData] = useState(apimock);

  const getDataSeries = (data: DashboardData) => {
    return data.categories.map((item) => {
      return item.percentage;
    });
  };

  return (
    <>
      <View>
        <MonthSelector
          displayMonth={displayMonth}
          monthHandler={monthHandler}
        />
      </View>
      <Container>
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
        <Card>
          <GraphContainer>
            <Title>Despesas por categoria</Title>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={getDataSeries(apimock)}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.45}
              coverFill={'#FFF'}
            />
          </GraphContainer>
          {data &&
            data.categories.map((item, index) => {
              return (
                <InfoBlock key={item.categoryId}>
                  <NamedLegend>
                    <LegendCircle color={sliceColor[index]} />
                    <InfoTitle>{item.categoryName}</InfoTitle>
                  </NamedLegend>
                  <ValueText>R$ {item.amount}</ValueText>
                </InfoBlock>
              );
            })}
        </Card>
      </Container>
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
