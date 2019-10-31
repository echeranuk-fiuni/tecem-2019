import React from 'react'
import { connect } from 'react-redux'
import { find, isEmpty } from 'lodash'
import { removeTodoItemDispatcher, setCurrentItem } from '../actions/todos'

class TodoItemContainer extends React.Component {

    handleRemoveItem = () => {
        const currentItemId = this.props.currentItemId
        this.props.removeTodo(currentItemId)
        this.props.history.push('/todos')
    }

    componentDidMount() {
        const currentItemId = this.props.currentItemId
        const paramId = Number(this.props.match.params.id)

        if (currentItemId !== paramId) {
            this.props.setCurrentItemId(paramId)
        }
    }

    render() {
        const todoList = this.props.todoList
        const currentItemId = this.props.currentItemId
        const item = find(todoList, item => item.id === currentItemId)

        if (isEmpty(item)) {
            return <div>Item no definido</div>
        }

        return (
            <div>
                <div>ID: {item.id}</div>
                <div>Texto: {item.text}</div>
                <button onClick={this.handleRemoveItem}>Eliminar</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todoList: state.todos.list,
    currentItemId: state.todos.currentItemId
})

const mapDispatchToProps = (dispatch) => ({
    removeTodo: id => removeTodoItemDispatcher(dispatch, id),
    setCurrentItemId: id => dispatch(setCurrentItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItemContainer)