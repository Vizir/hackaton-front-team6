import { AppRoute } from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import { Container } from '../../../screens/header/home.container';
import { SCREENS } from '../../../screens/header/navigation/screen-definitions';
export const registerScreens = (routesManager) => {
    routesManager.addSection('financeControl', SCREENS, (routes) => {
        return routes.concat([new AppRoute(SCREENS.dashboard, Container)]);
    });
};
