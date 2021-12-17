import React, {useState, useMemo, useEffect} from 'react';
import {View, Text} from '@vizir-banking/banking-app-core/dist/layout';
import {MonthSelector} from '~/components/monthSelector/monthSelector';
import {Card} from '~/components/card/card';
import {DetailsItem} from '~/components/DetailsItem/DetailsItem';
import {CategoryPicker} from '~/screens/categoryPicker/categoryPicker';
import {Container} from './details.styles';
import {api} from '~/api/api';
import {connect} from 'react-redux';
import {UserState} from '@vizir-banking/banking-app-core/dist/redux/user/types';
import {LoadingScreen} from '../dashboard/dashboard.styles';

interface DetailsProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

interface DetailsData {
  previousPage: number,
  currentPage: number,
  nextPage: number,
  last: boolean,
  totalPages: number,
  totalItems: number,
  maxItemsPerPage: number,
  totalItemsPage: number,
  details: {
    transactionId: string,
    categoryId: string,
    categoryName: string,
    establishmentName: string,
    transactionDate: string,
    amount: string
  }[];
};
type DetailsItemsList = ReturnType<typeof mapStateToProps> & DetailsProps;

// const DetailsListMock = [
//   {
//     transactionId: '1',
//     categoryId: '0',
//     categoryName: 'Salario',
//     establishmentName: 'Vizir',
//     transactionDate: '2021-12-11T12:34:56.789Z',
//     amount: '12345.67',
//   },
//   {
//     transactionId: '2',
//     categoryId: '1',
//     categoryName: 'Investimentos',
//     establishmentName: 'BTC',
//     transactionDate: '2021-12-12T12:34:56.789Z',
//     amount: '123.45',
//   },
//   {
//     transactionId: '3',
//     categoryId: '2',
//     categoryName: 'Poupança',
//     establishmentName: 'Reserva',
//     transactionDate: '2021-12-12T16:34:56.789Z',
//     amount: '1234.56',
//   },
//   {
//     transactionId: '4',
//     categoryId: '3',
//     categoryName: 'Lazer',
//     establishmentName: 'Cinemark',
//     transactionDate: '2021-12-12T16:34:56.789Z',
//     amount: '123.45',
//   },
//   {
//     transactionId: '5',
//     categoryId: '4',
//     categoryName: 'Impostos',
//     establishmentName: 'Celular',
//     transactionDate: '2021-12-12T16:34:56.789Z',
//     amount: '45.67',
//   },
//   {
//     transactionId: '6',
//     categoryId: '999',
//     categoryName: 'teste',
//     establishmentName: 'Teste',
//     transactionDate: '2021-12-12T16:34:56.789Z',
//     amount: '45.67',
//   },
// ];

const Details: React.ComponentType<DetailsItemsList> = ({
  monthHandler,
  displayMonth,
  accountID,
  setLoading,
  loading,
}) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [transactionToUpdate, setTransactionToUpdate] = useState('');
  const [data, setData] = useState<DetailsData>();

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
    fetchDetailsData();
  }, [displayMonth]);

  const fetchDetailsData = () => {
    setLoading(true);
    api
      .get('/v1/account/details', {
        headers: {
          accountId: accountID && accountID[0],
          mocked: false,
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

  return (
    <Container>
      {modalStatus ? (
        <CategoryPicker setModalStatus={setModalStatus} transactionId={transactionToUpdate} />
      ) : (
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
            data.details.map((item) => (
              <DetailsItem
                key={item.transactionId}
                transactionId={item.transactionId}
                categoryId={item.categoryId}
                categoryName={item.categoryName}
                establishmentName={item.establishmentName}
                transactionDate={item.transactionDate}
                amount={item.amount}
                setModalStatus={setModalStatus}
                setTransactionToUpdate={setTransactionToUpdate}
              />
            ))
          ) : (
            <Card>
              <Text>Não há transações nesse período</Text>
            </Card>
          )}
        </>
      )}
    </Container>
  );
};

type State = {
  accountID?: number[] | undefined;
};

const mapStateToProps = ({user}: {user?: UserState}): State => ({
  accountID: user?.currentUser.accountIds,
});

export const DetailsList = connect(mapStateToProps, null)(Details);
