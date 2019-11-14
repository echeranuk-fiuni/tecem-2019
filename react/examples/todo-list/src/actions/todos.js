import todoApi from '../api/todoApi'

export const SET_TODO_ITEMS = 'SET_TODO_ITEMS'
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'

export const setTodoItems = items => {
    return {
        type: SET_TODO_ITEMS,
        payload: items
    }
}

export const setCurrentItem = id => {
    return {
        type: SET_CURRENT_ITEM,
        payload: id
    }
}

export const getAllTodoItemsDispatcher = (dispatch) => {
    // Ejecutar la llamada al servidor y actualizar los items
    todoApi.getAll().then(
        response => {
            return dispatch(setTodoItems(response.data.todos))
        }
    )
}

export const removeTodoItemDispatcher = (dispatch, id) => {
    todoApi.deleteItem(id).then(
        response => dispatch(setTodoItems(response.data.todos))
    )
}

export const addTodoItemDispatcher = (dispatch, text) => {
    todoApi.addTodoItem(text).then(
        response => dispatch(setTodoItems(response.data.todos))
    )
}