import {EntrypointParams} from '@vizir-banking/banking-app-core/dist/utils/entrypoint-params';

import {webviewPluginEntry} from '~/home/entry';

export default (entryParams: EntrypointParams): void => {

    webviewPluginEntry(
      entryParams.routesManager,
      entryParams.homeManager,
    );
};
