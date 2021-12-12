import React from 'react';
interface MonthSelectorProps {
    displayMonth: number;
    monthHandler: (month: number) => void;
}
declare const MonthSelector: React.ComponentType<MonthSelectorProps>;
export { MonthSelector };
