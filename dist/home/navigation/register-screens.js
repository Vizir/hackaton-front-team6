import { AppRoute } from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import { Container } from '../../home/screens/home.container';
import { SCREENS } from '../../home/navigation/screen-definitions';
export const registerScreens = (routesManager) => {
    routesManager.addSection('financeControl', SCREENS, (routes) => {
        return routes.concat([new AppRoute(SCREENS.dashboard, Container, {})]);
    });
};
