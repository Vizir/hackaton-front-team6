import React from 'react';
import { UserState } from '@vizir-banking/banking-app-core/dist/redux/user/types';
interface DashboardProps {
    monthHandler: (month: number) => void;
    displayMonth: number;
    setLoading: (loading: boolean) => void;
    loading: boolean;
}
declare type DashboardSummary = ReturnType<typeof mapStateToProps> & DashboardProps;
declare type State = {
    accountID?: number[] | undefined;
};
declare const mapStateToProps: ({ user }: {
    user?: UserState | undefined;
}) => State;
export declare const SummaryDashboard: import("react-redux").ConnectedComponent<React.FunctionComponent<DashboardSummary>, Pick<DashboardSummary, "loading" | "displayMonth" | "monthHandler" | "accountID" | "setLoading">>;
export {};
