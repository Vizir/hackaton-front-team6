import {AppRoute} from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import {RoutesManager} from '@vizir-banking/banking-app-core/dist/hooks/routes-manager';

import {Container} from '~/home/screens/home.container';
import {SCREENS} from '~/home/navigation/screen-definitions';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  routesManager.addSection(
    'financeControl',
    SCREENS,
    (routes: AppRoute[]): AppRoute[] => {
      return routes.concat([new AppRoute(SCREENS.dashboard, Container, {})]);
    },
  );
};
