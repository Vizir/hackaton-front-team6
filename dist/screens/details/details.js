import React, { useState, useMemo, useEffect } from 'react';
import { View, Text } from '@vizir-banking/banking-app-core/dist/layout';
import { MonthSelector } from '../../components/monthSelector/monthSelector';
import { Card } from '../../components/card/card';
import { DetailsItem } from '../../components/DetailsItem/DetailsItem';
import { CategoryPicker } from '../../screens/categoryPicker/categoryPicker';
import { Container } from './details.styles';
import { api } from '../../api/api';
import { connect } from 'react-redux';
import { LoadingScreen } from '../dashboard/dashboard.styles';
;
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
const Details = ({ monthHandler, displayMonth, accountID, setLoading, loading, }) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [transactionToUpdate, setTransactionToUpdate] = useState('');
    const [data, setData] = useState();
    const period = useMemo(() => ({
        startDate: new Date(new Date().getFullYear(), displayMonth, 1)
            .toISOString()
            .split('T')[0],
        endDate: new Date(new Date().getFullYear(), displayMonth + 1, 0)
            .toISOString()
            .split('T')[0],
    }), [displayMonth]);
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
    return (React.createElement(Container, null, modalStatus ? (React.createElement(CategoryPicker, { setModalStatus: setModalStatus, transactionId: transactionToUpdate, data: data, setData: setData })) : (React.createElement(React.Fragment, null,
        React.createElement(View, null,
            React.createElement(MonthSelector, { displayMonth: displayMonth, monthHandler: monthHandler })),
        loading ? (React.createElement(LoadingScreen, { size: "large", color: "#0000ff" })) : data ? (data.details.map((item) => (React.createElement(DetailsItem, { key: item.transactionId, transactionId: item.transactionId, categoryId: item.categoryId, categoryName: item.categoryName, establishmentName: item.establishmentName, transactionDate: item.transactionDate, amount: item.amount, setModalStatus: setModalStatus, setTransactionToUpdate: setTransactionToUpdate })))) : (React.createElement(Card, null,
            React.createElement(Text, null, "N\u00E3o h\u00E1 transa\u00E7\u00F5es nesse per\u00EDodo")))))));
};
const mapStateToProps = ({ user }) => ({
    accountID: user?.currentUser.accountIds,
});
export const DetailsList = connect(mapStateToProps, null)(Details);
