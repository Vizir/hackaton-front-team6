import React, {useState} from 'react';
import {BaseHome} from '~/screens/header/home';

import {SummaryDashboard} from '~/screens/dashboard/dashboard';
import {DetailsList} from '~/screens/details/details';

const Container = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(true);

  const handleTabPress = (id: number) => (): void => {
    setSelectedTabIndex(id);
  };

  const renderScreen = (tabIndex: number) => {
    if (tabIndex === 0)
      return (
        <SummaryDashboard
          monthHandler={monthHandler}
          displayMonth={displayMonth}
          setLoading={setLoading}
          loading={loading}
        />
      );
    else
      return (
        <DetailsList
          monthHandler={monthHandler}
          displayMonth={displayMonth}
          setLoading={setLoading}
          loading={loading}
        />
      );
  };

  const monthHandler = (month: number) => {
    setDisplayMonth(month);
  };

  return (
    <BaseHome
      selectedTabIndex={selectedTabIndex}
      handleTabPress={handleTabPress}
      renderScreen={renderScreen}
    />
  );
};

export {Container};
