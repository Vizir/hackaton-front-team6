import React from 'react';
import { ScrollableContainer, BackButton, Container, ButtonText, } from './categoryPicker.styles';
const list = [
    { categoryName: 'Salario', categoryId: 0 },
    { categoryName: 'Investimentos', categoryId: 1 },
    { categoryName: 'Poupança', categoryId: 2 },
    { categoryName: 'Lazer', categoryId: 3 },
    { categoryName: 'Impostos', categoryId: 4 },
];
export const CategoryPicker = ({ setModalStatus, }) => {
    return (React.createElement(ScrollableContainer, null,
        React.createElement(Container, null,
            React.createElement(BackButton, { onPress: () => setModalStatus(false) },
                React.createElement(ButtonText, null, "Confirmar")))));
};
