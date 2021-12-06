import React from 'react';

import {BaseHome} from '~/home/screens/home';
import {State, StateProps} from '~/home/screens/types';

const Container = () => {
  return <BaseHome />;
};

const mapStateToProps = ({user, application}: StateProps): State => ({
  document: user.currentUser.documentNumber,
  token: application.authToken,
});

export {Container};
