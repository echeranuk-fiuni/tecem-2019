import todoApi from '../api/todoApi'

export const SET_TODO_ITEMS = 'SET_TODO_ITEMS'

export const setTodoItems = items => {
    return {
        type: SET_TODO_ITEMS,
        payload: items
    }
}

export const getAllTodoItemsDispatcher = (dispatch) => {
    // Ejecutar la llamada al servidor y actualizar los items
    todoApi.getAll().then(
        response => {
            console.log('RESPONSE OBJECT:')
            console.log(response)
            return dispatch(setTodoItems(response.data.data))
        }
    )
}

export const removeTodoItemDispatcher = (dispatch, id) => {
    todoApi.deleteItem(id).then(
        response => dispatch(setTodoItems(response.data.data))
    )
}

export const addTodoItemDispatcher = (dispatch, text) => {
    todoApi.addTodoItem(text).then(
        response => dispatch(setTodoItems(response.data.data))
    )
}