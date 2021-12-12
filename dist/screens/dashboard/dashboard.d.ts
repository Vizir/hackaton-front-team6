import React from 'react';
interface DashboardProps {
    monthHandler: (month: number) => void;
    displayMonth: number;
}
declare const Dashboard: React.ComponentType<DashboardProps>;
export { Dashboard };
