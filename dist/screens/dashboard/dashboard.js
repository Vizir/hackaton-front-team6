import React from 'react';
import { MonthSelector } from '../../components/monthSelector/monthSelector';
import { Card } from '../../components/card/card';
import { View } from '@vizir-banking/banking-app-core/dist/layout';
import { Upload, Download } from '@vizir-banking/design-system';
import { StyleSheet } from 'react-native';
import { InfoContainer, ValueText, CardContainer, CardRow, InfoTitle, } from './dashboard.styles';
const Dashboard = ({ monthHandler, displayMonth, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(View, null,
            React.createElement(MonthSelector, { displayMonth: displayMonth, monthHandler: monthHandler })),
        React.createElement(Card, null,
            React.createElement(CardContainer, null,
                React.createElement(InfoContainer, null,
                    React.createElement(InfoTitle, null, "Balan\u00E7o Mensal"),
                    React.createElement(ValueText, null, "R$ 4.000,00")),
                React.createElement(CardRow, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(Download, { width: 24, color: "green" }),
                        React.createElement(InfoContainer, null,
                            React.createElement(InfoTitle, null, "Receitas"),
                            React.createElement(ValueText, { color: "#19B93D" }, "R$ 5.000,00"))),
                    React.createElement(React.Fragment, null,
                        React.createElement(Upload, { width: 24, color: "red" }),
                        React.createElement(InfoContainer, null,
                            React.createElement(InfoTitle, null, "Despesas"),
                            React.createElement(ValueText, { color: "#F80C0C" }, "R$ 1.000,00"))))))));
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
