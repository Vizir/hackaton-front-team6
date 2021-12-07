import React from 'react';
interface HeaderProps {
    selectedTabIndex: number;
    handleTabPress: (id: number) => () => void;
    renderScreen: (tabIndex: number) => unknown;
}
declare const BaseHome: React.ComponentType<HeaderProps>;
export { BaseHome };
