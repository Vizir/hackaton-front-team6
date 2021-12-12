import {HomeManager} from '@vizir-banking/banking-app-core/dist/hooks/home-manager';
import {RoutesManager} from '@vizir-banking/banking-app-core/dist/hooks/routes-manager';

import {registerScreens} from '~/screens/header/navigation/register-screens';
import {SCREENS} from '~/screens/header/navigation/screen-definitions';

export const financeControlEntry = (
  routesManager: typeof RoutesManager,
  homeManager: typeof HomeManager,
): void => {
  homeManager.addHomeMenuItem([
    {
      order: 1,
      label: 'Julius',
      icon: 'pix',
      iconWidth: 25,
      iconHeight: 25,
      screenName: SCREENS.dashboard,
    },
  ]);

  registerScreens(routesManager);
};
