//libs
import React from 'react';
// constants
import { BASE_PATH, PROTECTED_ROUTE_PATH } from '../../utilities/route.paths';

const ProtectedRoute = WrappedComponent => (props) => {
    const { currentUser, ...otherProps } = props;
    const { history } = props;

    const authHandler = () => {
        history.push(BASE_PATH + PROTECTED_ROUTE_PATH);
        return null;
    };

    return (currentUser?.uid ? <WrappedComponent {...otherProps} /> : authHandler());
};

export default ProtectedRoute;