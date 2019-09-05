import React from 'react'

class UserGreetings extends React.Component {

    getFullname = (user) => {
        return user.firstname + ' ' + user.lastname
    }

    getGreetings = (user) => {
        const userFullname = 
            user 
            ? this.getFullname(user)
            : 'desconocido/a'

        return 'Bienvenido/a ' + userFullname
    }

    render() {
        const user = this.props.userObject
        const greetings = this.getGreetings(user)
        return <p>{greetings}</p>
    }
}

export default UserGreetings