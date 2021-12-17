import React from 'react';
import moment from 'moment';
import { Touchable } from '@vizir-banking/banking-app-core/dist/layout';
import { DetailsItemWrapper, DetailsItemValue, DetailsItemInfosWrapper, DetailsItemInfos, DetailsItemTitle, DetailsItemDate, } from './DetailsItem.styles';
import { DetailsItemIcon } from '../DetailsItemIcon/DetailsItemIcon';
;
// transactionId: string
// categoryId: string,
// categoryName: string,
// establishmentName: string
// transactionDate: yyyy-dd-mmThh:mm:ss.sssZ
// amount: string ("12345.54")
export const DetailsItem = ({ transactionId, categoryName, establishmentName, transactionDate, amount, setModalStatus, setTransactionToUpdate, }) => {
    const handleItemPress = () => {
        setTransactionToUpdate(transactionId);
        setModalStatus(true);
    };
    return (React.createElement(Touchable, { onPress: () => handleItemPress() },
        React.createElement(DetailsItemWrapper, null,
            React.createElement(DetailsItemIcon, { categoryName: categoryName }),
            React.createElement(DetailsItemInfosWrapper, null,
                React.createElement(DetailsItemInfos, null,
                    React.createElement(DetailsItemTitle, { categoryName: categoryName }, establishmentName ? establishmentName : `Transação #${transactionId}`),
                    React.createElement(DetailsItemDate, null, moment(transactionDate).format('DD/MMM - HH:mm:ss')))),
            React.createElement(DetailsItemValue, null, `R$ ${amount}`))));
};
