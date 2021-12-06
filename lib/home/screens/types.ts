import {WebViewMessageEvent} from 'react-native-webview';
import {ApplicationContextType} from '@vizir-banking/banking-app-core/dist/contexts/application-context';
import {UserState} from '@vizir-banking/banking-app-core/dist/redux/user/types';
import {ApplicationState} from '@vizir-banking/banking-app-core/dist/redux/application/types';

export interface WebviewContainerProps {
  applicationContext: ApplicationContextType;
  getParam(parameterName: string): any;
  route: {
    name: string;
    params: {
      webViewURL: string;
      webViewTitle: string;
    };
  };
}

export type WebviewScreenProps = {
  webviewConfig: {
    webViewURL: string;
    homeTitle: string;
  };
  onMessage: (e: WebViewMessageEvent) => Promise<void>;
  injectableScript: string;
};

export type State = {
  document?: string;
  token?: string;
};

export type StateProps = {
  user: UserState;
  application: ApplicationState;
};
