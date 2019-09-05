import React from 'react'

class TodoList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.list.map(
                    element => 
                    <li>
                        {element.text}
                    </li>
                )}
            </ul>
        )
    }
}

export default TodoList