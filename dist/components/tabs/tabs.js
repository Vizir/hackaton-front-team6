import { Touchable } from '@vizir-banking/banking-app-core/dist/layout';
import React from 'react';
import { Wrapper, Label, Separator, ActiveIndicator, Container, } from '../../components/tabs/tabs.styles';
export const Tabs = ({ selectedTabIndex, handleTabPress, }) => {
    const tabs = [
        {
            label: 'Resumo',
            id: 0,
        },
        {
            label: 'Detalhes',
            id: 1,
        },
    ];
    return (React.createElement(Container, null,
        React.createElement(Wrapper, null, tabs.map((item, index) => (React.createElement(Touchable, { onPress: handleTabPress(item.id), key: item.id },
            React.createElement(Label, { isSelected: index === selectedTabIndex }, item.label),
            index === selectedTabIndex && React.createElement(ActiveIndicator, null))))),
        React.createElement(Separator, null)));
};
