import todoApi from '../api/todoApi'
import { apiCallWithErrorHandlingDispatcher } from './errors'

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

    return apiCallWithErrorHandlingDispatcher(
        dispatch,
        todoApi.getAll(),
        data => dispatch(setTodoItems(data.todos))
    )
}

export const removeTodoItemDispatcher = (dispatch, id) => {

    return apiCallWithErrorHandlingDispatcher(
        dispatch,
        todoApi.deleteItem(id),
        data => dispatch(setTodoItems(data.todos))
    )
}

export const addTodoItemDispatcher = (dispatch, text) => {

    return apiCallWithErrorHandlingDispatcher(
        dispatch,
        todoApi.addTodoItem(text),
        data => dispatch(setTodoItems(data.todos))
    )
}