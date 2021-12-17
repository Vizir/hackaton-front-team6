import React from 'react';
import { UserState } from '@vizir-banking/banking-app-core/dist/redux/user/types';
interface CategoryPickerProps {
    setModalStatus: (status: boolean) => void;
    transactionId: string;
}
declare type CategoryPickerPropsRedux = ReturnType<typeof mapStateToProps> & CategoryPickerProps;
export declare const CategoryPicker: React.ComponentType<CategoryPickerPropsRedux>;
declare type State = {
    accountID?: number[] | undefined;
};
declare const mapStateToProps: ({ user }: {
    user?: UserState | undefined;
}) => State;
export declare const UpdateCategory: import("react-redux").ConnectedComponent<React.FunctionComponent<CategoryPickerPropsRedux>, Pick<CategoryPickerPropsRedux, "accountID" | "transactionId" | "setModalStatus">>;
export {};
