import React, { useState, useEffect, useMemo } from 'react';
import { MonthSelector } from '../../components/monthSelector/monthSelector';
import { Card } from '../../components/card/card';
import { Text, View } from '@vizir-banking/banking-app-core/dist/layout';
import { Upload, Download } from '@vizir-banking/design-system';
import { StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { api } from '../../api/api';
import { connect } from 'react-redux';
import { sliceColorOptions } from '../../constants/colors';
import { InfoContainer, ValueText, CardContainer, CardRow, InfoTitle, InfoBlock, Title, GraphContainer, LegendCircle, Container, NamedLegend, LoadingScreen, } from './dashboard.styles';
const widthAndHeight = 250;
const sliceColor = sliceColorOptions;
const Dashboard = (props) => {
    const { monthHandler, displayMonth, accountID, setLoading, loading } = props;
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
        fetchDashboardData();
    }, [displayMonth]);
    const fetchDashboardData = () => {
        setLoading(true);
        api
            .get('/v1/account/summary', {
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
    const getDataSeries = (data) => {
        return data.categories.map((item) => {
            return item.percentage;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(View, null,
            React.createElement(MonthSelector, { displayMonth: displayMonth, monthHandler: monthHandler })),
        false ? (React.createElement(LoadingScreen, { size: "large", color: "#0000ff" })) : data ? (React.createElement(Container, null,
            React.createElement(Card, null,
                React.createElement(CardContainer, null,
                    React.createElement(InfoContainer, null,
                        React.createElement(InfoTitle, null, "Balan\u00E7o Mensal"),
                        React.createElement(ValueText, null,
                            "R$ ",
                            data.balanceAmount.replace('.', ','))),
                    React.createElement(CardRow, null,
                        React.createElement(Download, { width: 24, color: "green" }),
                        React.createElement(InfoContainer, null,
                            React.createElement(InfoTitle, null, "Receitas"),
                            React.createElement(ValueText, { color: "#19B93D" },
                                "R$ ",
                                data.incomeAmount.replace('.', ','))),
                        React.createElement(Upload, { width: 24, color: "red" }),
                        React.createElement(InfoContainer, null,
                            React.createElement(InfoTitle, null, "Despesas"),
                            React.createElement(ValueText, { color: "#F80C0C" },
                                "R$ ",
                                data.expenseAmount.replace('.', ',')))))),
            React.createElement(Card, null,
                React.createElement(GraphContainer, null,
                    React.createElement(Title, null, "Despesas por categoria"),
                    React.createElement(PieChart, { widthAndHeight: widthAndHeight, series: getDataSeries(data), sliceColor: sliceColor, doughnut: true, coverRadius: 0.45, coverFill: '#FFF' })),
                data &&
                    data.categories.map((item, index) => {
                        return (React.createElement(InfoBlock, { key: item.categoryId },
                            React.createElement(NamedLegend, null,
                                React.createElement(LegendCircle, { color: sliceColor[index] }),
                                React.createElement(InfoTitle, null, item.categoryName || 'Não Categorizado')),
                            React.createElement(ValueText, null,
                                "R$ ",
                                item.amount)));
                    })))) : (React.createElement(Card, null,
            React.createElement(Text, null, "N\u00E3o h\u00E1 transa\u00E7\u00F5es nesse per\u00EDodo")))));
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
const mapStateToProps = ({ user }) => ({
    accountID: user?.currentUser.accountIds,
});
export const SummaryDashboard = connect(mapStateToProps, null)(Dashboard);
