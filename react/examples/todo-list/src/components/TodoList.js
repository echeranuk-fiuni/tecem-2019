import React from 'react'

class TodoList extends React.Component {

    handleClickRemove = (id) => {
        this.props.onRemoveTodoItem(id)
    }

    render() {
        return(
            <ul>
                {this.props.list.map(
                    element => 
                    <li key={element.id}>
                        {element.text}
                        <button
                            onClick={
                                () => this.handleClickRemove(element.id)
                            }
                        >
                            Eliminar
                        </button>
                    </li>
                )}
            </ul>
        )
    }
}

export default TodoList