import { registerScreens } from '../home/navigation/register-screens';
export const webviewPluginEntry = (routesManager, homeManager) => {
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
