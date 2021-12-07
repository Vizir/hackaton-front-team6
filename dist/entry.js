import { webviewPluginEntry } from './/home/entry';
export default (entryParams) => {
    webviewPluginEntry(entryParams.routesManager, entryParams.homeManager);
};
