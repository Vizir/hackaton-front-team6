import React from 'react';
import { UserState } from '@vizir-banking/banking-app-core/dist/redux/user/types';
interface DetailsProps {
    monthHandler: (month: number) => void;
    displayMonth: number;
    setLoading: (loading: boolean) => void;
    loading: boolean;
}
export interface DetailsData {
    previousPage: number;
    currentPage: number;
    nextPage: number;
    last: boolean;
    totalPages: number;
    totalItems: number;
    maxItemsPerPage: number;
    totalItemsPage: number;
    details: {
        transactionId: string;
        categoryId: string;
        categoryName: string;
        establishmentName: string;
        transactionDate: string;
        amount: string;
    }[];
}
declare type DetailsItemsList = ReturnType<typeof mapStateToProps> & DetailsProps;
declare type State = {
    accountID?: number[] | undefined;
};
declare const mapStateToProps: ({ user }: {
    user?: UserState | undefined;
}) => State;
export declare const DetailsList: import("react-redux").ConnectedComponent<React.FunctionComponent<DetailsItemsList>, Pick<DetailsItemsList, "loading" | "displayMonth" | "monthHandler" | "accountID" | "setLoading">>;
export {};
