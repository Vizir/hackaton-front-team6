import React, { useState } from 'react';
import { BaseHome } from '../../screens/header/home';
import { Dashboard } from '../../screens/dashboard/dashboard';
import { Details } from '../../screens/details/details';
const Container = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
    const handleTabPress = (id) => () => {
        setSelectedTabIndex(id);
    };
    const renderScreen = (tabIndex) => {
        if (tabIndex === 0)
            return (React.createElement(Dashboard, { monthHandler: monthHandler, displayMonth: displayMonth }));
        else
            return (React.createElement(Details, { monthHandler: monthHandler, displayMonth: displayMonth }));
    };
    const monthHandler = (month) => {
        setDisplayMonth(month);
    };
    return (React.createElement(BaseHome, { selectedTabIndex: selectedTabIndex, handleTabPress: handleTabPress, renderScreen: renderScreen }));
};
export { Container };
