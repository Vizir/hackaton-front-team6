import React from 'react';
import { Coin, Bill, PieChart, ChevronUp, Ticket, HelpCircle } from '@vizir-banking/design-system';
import { colorsByCategory } from '../../constants/categories';
;
export const DetailsItemIcon = ({ categoryName, }) => {
    const icons = {
        Salario: React.createElement(Coin, { color: colorsByCategory[categoryName], width: "28" }),
        Investimentos: React.createElement(PieChart, { color: colorsByCategory[categoryName], width: "28" }),
        Poupança: React.createElement(ChevronUp, { color: colorsByCategory[categoryName], width: "28" }),
        Lazer: React.createElement(Ticket, { color: colorsByCategory[categoryName], width: "28" }),
        Impostos: React.createElement(Bill, { color: colorsByCategory[categoryName], width: "28" }),
        outros: React.createElement(HelpCircle, { color: "#411B71", width: "28" }),
    };
    return icons[categoryName] || icons.outros;
};
