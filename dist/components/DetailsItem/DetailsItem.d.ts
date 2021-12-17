import React from 'react';
interface DetailsItemProps {
    transactionId: string;
    categoryId: string;
    categoryName: string;
    establishmentName: string;
    transactionDate: string;
    amount: string;
    setModalStatus: (status: boolean) => void;
    setTransactionToUpdate: (transaction: string) => void;
}
export declare const DetailsItem: React.ComponentType<DetailsItemProps>;
export {};
