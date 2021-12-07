import React, { useState } from 'react';
import { BaseHome } from '../../screens/header/home';
import { Dashboard } from '../../screens/dashboard/dashboard';
import { Details } from '../../screens/details/details';
const Container = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const handleTabPress = (id) => () => {
        setSelectedTabIndex(id);
    };
    const renderScreen = (tabIndex) => {
        if (tabIndex === 0)
            return React.createElement(Dashboard, null);
        else
            return React.createElement(Details, null);
    };
    return (React.createElement(BaseHome, { selectedTabIndex: selectedTabIndex, handleTabPress: handleTabPress, renderScreen: renderScreen }));
};
export { Container };
