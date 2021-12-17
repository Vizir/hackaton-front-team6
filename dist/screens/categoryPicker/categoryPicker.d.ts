import React from 'react';
import { UserState } from '@vizir-banking/banking-app-core/dist/redux/user/types';
import { DetailsData } from '../details/details';
interface CategoryPickerProps {
    setModalStatus: (status: boolean) => void;
    transactionId: string;
    data: DetailsData | undefined;
    setData: (data: DetailsData) => void;
}
declare type CategoryPickerPropsRedux = ReturnType<typeof mapStateToProps> & CategoryPickerProps;
export declare const CategoryPicker: React.ComponentType<CategoryPickerPropsRedux>;
declare type State = {
    accountID?: number[] | undefined;
};
declare const mapStateToProps: ({ user }: {
    user?: UserState | undefined;
}) => State;
export declare const UpdateCategory: import("react-redux").ConnectedComponent<React.FunctionComponent<CategoryPickerPropsRedux>, Pick<CategoryPickerPropsRedux, "data" | "accountID" | "setData" | "transactionId" | "setModalStatus">>;
export {};
