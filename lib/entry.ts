import {EntrypointParams} from '@vizir-banking/banking-app-core/dist/utils/entrypoint-params';

import {financeControlEntry} from '~/screens/header/entry';

export default (entryParams: EntrypointParams): void => {
  financeControlEntry(entryParams.routesManager, entryParams.homeManager);
};
