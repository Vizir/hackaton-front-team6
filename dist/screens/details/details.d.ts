import React from 'react';
interface DetailsProps {
    monthHandler: (month: number) => void;
    displayMonth: number;
}
declare const Details: React.ComponentType<DetailsProps>;
export { Details };
