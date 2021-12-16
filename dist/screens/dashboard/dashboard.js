import React from 'react';
import { MonthSelector } from '../../components/monthSelector/monthSelector';
import { Card } from '../../components/card/card';
import { View } from '@vizir-banking/banking-app-core/dist/layout';
import { Upload, Download } from '@vizir-banking/design-system';
import { StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { InfoContainer, ValueText, CardContainer, CardRow, InfoTitle, } from './dashboard.styles';
const widthAndHeight = 250;
const series = [60, 30, 10];
const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
const apimock = {
    incomeAmount: '1234.56',
    expenseAmount: '1234.56',
    balanceAmount: '1234.56',
    categories: [
        {
            categoryId: '34',
            categoryName: 'Compras Online',
            amount: 100.0,
            percentage: 10,
        },
        {
            categoryId: '34',
            categoryName: 'Alimentação',
            amount: 300.0,
            percentage: 30,
        },
        {
            categoryId: '34',
            categoryName: 'Lazer',
            amount: 900.0,
            percentage: 60,
        },
    ],
};
const Dashboard = ({ monthHandler, displayMonth, }) => {
    const getDataSeries = (data) => {
        return data.categories.map((item) => {
            return item.percentage;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(View, null,
            React.createElement(MonthSelector, { displayMonth: displayMonth, monthHandler: monthHandler })),
        React.createElement(Card, null,
            React.createElement(CardContainer, null,
                React.createElement(InfoContainer, null,
                    React.createElement(InfoTitle, null, "Balan\u00E7o Mensal"),
                    React.createElement(ValueText, null, "R$ 4.000,00")),
                React.createElement(CardRow, null,
                    React.createElement(Download, { width: 24, color: "green" }),
                    React.createElement(InfoContainer, null,
                        React.createElement(InfoTitle, null, "Receitas"),
                        React.createElement(ValueText, { color: "#19B93D" }, "R$ 5.000,00")),
                    React.createElement(Upload, { width: 24, color: "red" }),
                    React.createElement(InfoContainer, null,
                        React.createElement(InfoTitle, null, "Despesas"),
                        React.createElement(ValueText, { color: "#F80C0C" }, "R$ 1.000,00"))))),
        React.createElement(Card, null,
            React.createElement(PieChart, { widthAndHeight: widthAndHeight, series: getDataSeries(apimock), sliceColor: sliceColor, doughnut: true, coverRadius: 0.45, coverFill: '#FFF' }))));
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
export { Dashboard };
