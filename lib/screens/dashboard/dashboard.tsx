import React, {useState, useEffect, useMemo} from 'react';
import {MonthSelector} from '~/components/monthSelector/monthSelector';
import {Card} from '~/components/card/card';
import {Text, View} from '@vizir-banking/banking-app-core/dist/layout';
import {Upload, Download} from '@vizir-banking/design-system';
import {StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {api} from '~/api/api';
import {connect} from 'react-redux';
import {UserState} from '@vizir-banking/banking-app-core/dist/redux/user/types';

import {sliceColorOptions} from '~/constants/colors';

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
  LoadingScreen,
} from './dashboard.styles';

interface DashboardProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

const widthAndHeight = 250;
const sliceColor = sliceColorOptions;

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
type DashboardSummary = ReturnType<typeof mapStateToProps> & DashboardProps;

const Dashboard: React.ComponentType<DashboardSummary> = (props) => {
  const {monthHandler, displayMonth, accountID, setLoading, loading} = props;

  const [data, setData] = useState<DashboardData>();

  const period = useMemo(
    () => ({
      startDate: new Date(new Date().getFullYear(), displayMonth, 1)
        .toISOString()
        .split('T')[0],
      endDate: new Date(new Date().getFullYear(), displayMonth + 1, 0)
        .toISOString()
        .split('T')[0],
    }),
    [displayMonth],
  );

  useEffect(() => {
    fetchDashboardData();
  }, [displayMonth]);

  const fetchDashboardData = () => {
    setLoading(true);
    api
      .get('/v1/account/summary', {
        headers: {
          accountId: accountID && accountID[0],
          mocked: false,
          'x-api-key': '7yoWVPD0GD70nkYMxwZCN69QHvcFmV6d3ffCrlU2',
        },
        params: {
          startDate: period.startDate,
          endDate: period.endDate,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getDataSeries = (data: DashboardData) => {
    return data.categories.map((item) => {
      return Number(item.percentage);
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
      {loading ? (
        <LoadingScreen size="large" color="#0000ff" />
      ) : data ? (
        <Container>
          <Card>
            <CardContainer>
              <InfoContainer>
                <InfoTitle>Balanço Mensal</InfoTitle>
                <ValueText>R$ {data.balanceAmount.replace('.', ',')}</ValueText>
              </InfoContainer>
              <CardRow>
                <Download width={24} color="green" />
                <InfoContainer>
                  <InfoTitle>Receitas</InfoTitle>
                  <ValueText color="#19B93D">
                    R$ {data.incomeAmount.replace('.', ',')}
                  </ValueText>
                </InfoContainer>
                <Upload width={24} color="red" />
                <InfoContainer>
                  <InfoTitle>Despesas</InfoTitle>
                  <ValueText color="#F80C0C">
                    R$ {data.expenseAmount.replace('.', ',')}
                  </ValueText>
                </InfoContainer>
              </CardRow>
            </CardContainer>
          </Card>
          <Card>
            <GraphContainer>
              <Title>Despesas por categoria</Title>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={getDataSeries(data)}
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
                      <InfoTitle>
                        {item.categoryName || 'Não Categorizado'}
                      </InfoTitle>
                    </NamedLegend>
                    <ValueText>R$ {item.amount}</ValueText>
                  </InfoBlock>
                );
              })}
          </Card>
        </Container>
      ) : (
        <Card>
          <Text>Não há transações nesse período</Text>
        </Card>
      )}
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

type State = {
  accountID?: number[] | undefined;
};

const mapStateToProps = ({user}: {user?: UserState}): State => ({
  accountID: user?.currentUser.accountIds,
});

export const SummaryDashboard = connect(mapStateToProps, null)(Dashboard);
