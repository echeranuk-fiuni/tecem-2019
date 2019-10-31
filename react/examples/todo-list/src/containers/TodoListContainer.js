import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoList from '../components/TodoList'
import {  
    getAllTodoItemsDispatcher
} from '../actions/todos'

class TodoListContainer extends React.Component {

    componentDidMount() {
        this.props.getAll()
    }

    render() {
        return(
            <div>
                <TodoList
                    list={this.props.todoList}
                />
                <Link to="/todos/new">Agregar item</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todoList: state.todos.list,
})

const mapDispatchToProps = (dispatch) => ({
    getAll: () => getAllTodoItemsDispatcher(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer)