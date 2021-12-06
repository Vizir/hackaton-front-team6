import {HomeManager} from '@vizir-banking/banking-app-core/dist/hooks/home-manager';
import {RoutesManager} from '@vizir-banking/banking-app-core/dist/hooks/routes-manager';

import {registerScreens} from '~/home/navigation/register-screens';
import {WebviewPluginConfigs} from '~/home/types';

export const webviewPluginEntry = (
  routesManager: typeof RoutesManager,
  homeManager: typeof HomeManager,
): void => {
  homeManager.addHomeMenuItem([
    {
      order: 1,
      label: 'Meu Controle',
      icon: 'pix',
      iconWidth: 25,
      iconHeight: 25,
      screenName: 'financeControl',
      routeParams: {},
    },
  ]);

  registerScreens(routesManager);
};
