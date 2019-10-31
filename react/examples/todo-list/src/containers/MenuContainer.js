import React from 'react'
import { Link } from 'react-router-dom'

class MenuContainer extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todos">ToDo List</Link></li>
                </ul>
            </nav>
        )
    }
}

export default MenuContainer