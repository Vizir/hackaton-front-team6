import 'styled-components';

import {Theme} from 'banking-app-core/dist/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
