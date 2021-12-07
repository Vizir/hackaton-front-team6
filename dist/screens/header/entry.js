import { registerScreens } from '../../screens/header/navigation/register-screens';
import { SCREENS } from '../../screens/header/navigation/screen-definitions';
export const financeControlEntry = (routesManager, homeManager) => {
    homeManager.addHomeMenuItem([
        {
            order: 1,
            label: 'Meu Controle',
            icon: 'pix',
            iconWidth: 25,
            iconHeight: 25,
            screenName: SCREENS.dashboard,
        },
    ]);
    registerScreens(routesManager);
};
