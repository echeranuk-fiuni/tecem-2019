import React from 'react'
import { connect } from 'react-redux'
import { addTodoItemDispatcher } from '../actions/todos'
import AddTodoForm from '../components/AddTodoForm'

class NewTodoItemFormContainer extends React.Component {

    handleAddTodo = text => {
        this.props.addTodo(text)
        this.props.history.push('/todos')
    }

    render() {
        return <AddTodoForm onAddTodoItem={this.handleAddTodo} />
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: text => addTodoItemDispatcher(dispatch, text)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodoItemFormContainer)