import React from 'react';
import { ChevronLeft, ChevronRight } from '@vizir-banking/design-system';
import { CustomTouchable, SelectorContainer, MonthName } from './styles';
const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];
const MonthSelector = ({ displayMonth, monthHandler, }) => {
    const handleNextMonth = () => {
        if (displayMonth === 11) {
            monthHandler(0);
            return;
        }
        monthHandler(displayMonth + 1);
    };
    const handlePreviousMonth = () => {
        if (displayMonth === 0) {
            monthHandler(11);
            return;
        }
        monthHandler(displayMonth - 1);
    };
    return (React.createElement(SelectorContainer, null,
        React.createElement(CustomTouchable, { onPress: () => handlePreviousMonth() },
            React.createElement(ChevronLeft, { color: "#411B71", width: "28" })),
        React.createElement(MonthName, null, months[displayMonth]),
        React.createElement(CustomTouchable, { onPress: () => handleNextMonth() },
            React.createElement(ChevronRight, { color: "#411B71", width: "28" }))));
};
export { MonthSelector };
