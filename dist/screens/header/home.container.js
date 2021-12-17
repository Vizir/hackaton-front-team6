import React, { useState } from 'react';
import { BaseHome } from '../../screens/header/home';
import { SummaryDashboard } from '../../screens/dashboard/dashboard';
import { Details } from '../../screens/details/details';
const Container = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
    const [loading, setLoading] = useState(true);
    const handleTabPress = (id) => () => {
        setSelectedTabIndex(id);
    };
    const renderScreen = (tabIndex) => {
        if (tabIndex === 0)
            return (React.createElement(SummaryDashboard, { monthHandler: monthHandler, displayMonth: displayMonth, setLoading: setLoading, loading: loading }));
        else
            return (React.createElement(Details, { monthHandler: monthHandler, displayMonth: displayMonth }));
    };
    const monthHandler = (month) => {
        setDisplayMonth(month);
    };
    return (React.createElement(BaseHome, { selectedTabIndex: selectedTabIndex, handleTabPress: handleTabPress, renderScreen: renderScreen }));
};
export { Container };
