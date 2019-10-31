import React from 'react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'

class TodoList extends React.Component {

    render() {
        const list = this.props.list
        
        if (isEmpty(list)) {
            return <div>La lista de items esta vacia</div>
        }

        return(
            <ul>
                {list.map(
                    element => 
                    <li key={element.id}>
                        <span>{element.text}</span>
                        <Link to={"/todos/" + element.id}>Ver</Link>
                    </li>
                )}
            </ul>
        )
    }
}

export default TodoList