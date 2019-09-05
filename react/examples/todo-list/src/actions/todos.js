export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'

export const addTodoItem = (text) => {
    const newTodoItem = {
        id: Math.floor(Math.random() * 1000000000),
        text: text
    }

    return {
        type: ADD_TODO_ITEM,
        payload: newTodoItem
    }
}