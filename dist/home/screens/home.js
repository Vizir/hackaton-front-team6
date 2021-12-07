import React from 'react';
import { Screen, ScreenTypes, ContentContainerTypes, } from '@vizir-banking/banking-app-core/dist/common';
const BaseHome = () => {
    return (React.createElement(Screen, { type: ScreenTypes.LOGGED, contentContainerType: ContentContainerTypes.VIEW, title: 'Dashboard' }));
};
export { BaseHome };
