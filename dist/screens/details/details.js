import React from 'react';
import { View } from '@vizir-banking/banking-app-core/dist/layout';
import { MonthSelector } from '../../components/monthSelector/monthSelector';
const Details = ({ monthHandler, displayMonth, }) => {
    return (React.createElement(View, null,
        React.createElement(MonthSelector, { displayMonth: displayMonth, monthHandler: monthHandler })));
};
export { Details };
