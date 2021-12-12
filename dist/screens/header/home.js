import React from 'react';
import { Screen, ScreenTypes, ContentContainerTypes, } from '@vizir-banking/banking-app-core/dist/common';
import { Tabs } from '../../components/tabs/tabs';
const BaseHome = ({ handleTabPress, selectedTabIndex, renderScreen, }) => {
    return (React.createElement(Screen, { type: ScreenTypes.LOGGED, contentContainerType: ContentContainerTypes.VIEW, hasBackgroundImage: true, title: 'Julius', rightIcon: 'filter' },
        React.createElement(Tabs, { selectedTabIndex: selectedTabIndex, handleTabPress: handleTabPress }),
        renderScreen(selectedTabIndex)));
};
export { BaseHome };
