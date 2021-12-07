import React from 'react';
import { BaseHome } from '../../home/screens/home';
const Container = () => {
    return React.createElement(BaseHome, null);
};
const mapStateToProps = ({ user, application }) => ({
    document: user.currentUser.documentNumber,
    token: application.authToken,
});
export { Container };
