import React, {useState} from 'react';
import {
  Screen,
  ScreenTypes,
  ContentContainerTypes,
} from '@vizir-banking/banking-app-core/dist/common';
import {Tabs} from '~/components/tabs/tabs';

interface HeaderProps {
  selectedTabIndex: number;
  handleTabPress: (id: number) => () => void;
  renderScreen: (tabIndex: number) => unknown;
}

const BaseHome: React.ComponentType<HeaderProps> = ({
  handleTabPress,
  selectedTabIndex,
  renderScreen,
}) => {
  return (
    <Screen
      type={ScreenTypes.LOGGED}
      contentContainerType={ContentContainerTypes.VIEW}
      hasBackgroundImage
      title={'Julius'}
      rightIcon={'filter'}
    >
      <Tabs
        selectedTabIndex={selectedTabIndex}
        handleTabPress={handleTabPress}
      />
      {renderScreen(selectedTabIndex)}
    </Screen>
  );
};

export {BaseHome};
