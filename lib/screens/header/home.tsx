import React from 'react';
import {
  Screen,
  ScreenTypes,
  ContentContainerTypes,
} from '@vizir-banking/banking-app-core/dist/common';
import {Tabs} from '~/components/tabs/tabs';
import {ScreensEnum} from '~/screens/header/types';

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
      title={'Controle de Gastos'}
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
