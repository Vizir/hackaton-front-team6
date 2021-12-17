import React, {useState} from 'react';
import {View} from '@vizir-banking/banking-app-core/dist/layout';
import {MonthSelector} from '~/components/monthSelector/monthSelector';
import {DetailsItem} from '~/components/DetailsItem/DetailsItem';
import {CategoryPicker} from '~/screens/categoryPicker/categoryPicker';

import {Container} from './details.styles';

interface DetailsProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
}

const DetailsList = [
  {
    transactionId: '1',
    categoryId: '0',
    categoryName: 'Salario',
    establishmentName: 'Vizir',
    transactionDate: '2021-12-11T12:34:56.789Z',
    amount: '12345.67',
  },
  {
    transactionId: '2',
    categoryId: '1',
    categoryName: 'Investimentos',
    establishmentName: 'BTC',
    transactionDate: '2021-12-12T12:34:56.789Z',
    amount: '123.45',
  },
  {
    transactionId: '3',
    categoryId: '2',
    categoryName: 'Poupança',
    establishmentName: 'Reserva',
    transactionDate: '2021-12-12T16:34:56.789Z',
    amount: '1234.56',
  },
  {
    transactionId: '4',
    categoryId: '3',
    categoryName: 'Lazer',
    establishmentName: 'Cinemark',
    transactionDate: '2021-12-12T16:34:56.789Z',
    amount: '123.45',
  },
  {
    transactionId: '5',
    categoryId: '4',
    categoryName: 'Impostos',
    establishmentName: 'Celular',
    transactionDate: '2021-12-12T16:34:56.789Z',
    amount: '45.67',
  },
  {
    transactionId: '6',
    categoryId: '999',
    categoryName: 'teste',
    establishmentName: 'Teste',
    transactionDate: '2021-12-12T16:34:56.789Z',
    amount: '45.67',
  },
];

const Details: React.ComponentType<DetailsProps> = ({
  monthHandler,
  displayMonth,
}) => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <Container>
      {modalStatus ? (
        <CategoryPicker setModalStatus={setModalStatus} />
      ) : (
        <>
          <MonthSelector
            displayMonth={displayMonth}
            monthHandler={monthHandler}
          />
          {DetailsList.map((item) => (
            <DetailsItem
              key={item.transactionId}
              categoryId={item.categoryId}
              categoryName={item.categoryName}
              establishmentName={item.establishmentName}
              transactionDate={item.transactionDate}
              amount={item.amount}
              setModalStatus={setModalStatus}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export {Details};
