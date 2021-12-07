import { ReactElement } from 'react';
declare type Props = {
    handleTabPress: (id: number) => () => void;
    selectedTabIndex: number;
};
export declare const Tabs: ({ selectedTabIndex, handleTabPress, }: Props) => ReactElement;
export {};
