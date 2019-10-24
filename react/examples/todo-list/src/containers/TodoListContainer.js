import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import AddTodoForm from '../components/AddTodoForm'
import { 
    removeTodoItemDispatcher, 
    getAllTodoItemsDispatcher, 
    addTodoItemDispatcher 
} from '../actions/todos'

class TodoListContainer extends React.Component {

    componentDidMount() {
        this.props.getAll()
    }

    render() {
        return(
            <div>
                <AddTodoForm
                    onAddTodoItem={this.props.addTodo}
                />
                <TodoList
                    list={this.props.todoList}
                    onRemoveTodoItem={this.props.removeTodo}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todoList: state.todos.list,
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => addTodoItemDispatcher(dispatch, text),
    removeTodo: (id) => removeTodoItemDispatcher(dispatch, id),
    getAll: () => getAllTodoItemsDispatcher(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer)