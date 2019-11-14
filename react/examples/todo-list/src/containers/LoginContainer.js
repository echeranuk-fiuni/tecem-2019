import React from 'react'
import { connect } from 'react-redux'
import { loginDispatcher } from '../actions/users'
import LoginForm from '../components/LoginForm'

class LoginContainer extends React.Component {

    handleLogin = async (username, password) => {
        await this.props.login(username, password)
        window.location.href = '/'
    }

    render() {
        return <LoginForm onLogin={this.handleLogin} />
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => loginDispatcher(dispatch, username, password)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)