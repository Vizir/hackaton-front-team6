import React, {useState} from 'react';

import {BaseHome} from '~/screens/header/home';

import {Dashboard} from '~/screens/dashboard/dashboard';
import {Details} from '~/screens/details/details';

const Container = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());

  const handleTabPress = (id: number) => (): void => {
    setSelectedTabIndex(id);
  };

  const renderScreen = (tabIndex: number) => {
    if (tabIndex === 0)
      return (
        <Dashboard monthHandler={monthHandler} displayMonth={displayMonth} />
      );
    else
      return (
        <Details monthHandler={monthHandler} displayMonth={displayMonth} />
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
