import React from 'react';
interface DetailsItemProps {
    categoryId: string;
    categoryName: string;
    establishmentName: string;
    transactionDate: string;
    amount: string;
    setModalStatus: (status: boolean) => void;
}
export declare const DetailsItem: React.ComponentType<DetailsItemProps>;
export {};
