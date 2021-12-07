import React, {useState} from 'react';

import {BaseHome} from '~/screens/header/home';

import {Dashboard} from '~/screens/dashboard/dashboard';
import {Details} from '~/screens/details/details';

const Container = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const handleTabPress = (id: number) => (): void => {
    setSelectedTabIndex(id);
  };

  const renderScreen = (tabIndex: number) => {
    if (tabIndex === 0) return <Dashboard />;
    else return <Details />;
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
