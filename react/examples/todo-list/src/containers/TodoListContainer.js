import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import AddTodoForm from '../components/AddTodoForm'
import { addTodoItem } from '../actions/todos'

class TodoListContainer extends React.Component {
    render() {
        return(
            <div>
                <AddTodoForm
                    onAddTodoItem={this.props.addTodo}
                />
                <TodoList
                    list={this.props.todoList}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todoList: state.todos.list,
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodoItem(text)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer)