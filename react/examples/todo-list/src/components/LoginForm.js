import React from 'react'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    changeUsername = (event) => {
        const inputNode = event.target
        const inputValue = inputNode.value
        this.setState({username: inputValue})
    }

    changePassword = (event) => {
        const inputNode = event.target
        const inputValue = inputNode.value
        this.setState({password: inputValue})
    }

    handleClick = () => {
        const username = this.state.username
        const password = this.state.password
        this.setState({username: '', password: ''})
        this.props.onLogin(username, password)
    }

    render() {
        return (
            <div>
                <label>Usuario</label>
                <input
                    name="Usuario"
                    type="text"
                    value={this.state.username}
                    onChange={this.changeUsername}
                />
                <br />
                <label>Password</label>
                <input
                    name="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                />
                <br />
                <button
                    onClick={this.handleClick}
                >
                    Ingresar
                </button>
            </div>
        )
    }
}

export default LoginForm