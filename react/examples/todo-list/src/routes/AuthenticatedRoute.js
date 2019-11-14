import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { getCurrentToken } from '../actions/users'

class AuthenticatedRoute extends React.Component {
    render() {
        const { path, component, exact } = this.props
        const isAuthenticated = getCurrentToken() !== null
        return (
            isAuthenticated ?
            <Route path={path} component={component} exact={exact} /> :
            <Redirect to={{pathname: '/login'}} />
        )
    }
}

export default AuthenticatedRoute