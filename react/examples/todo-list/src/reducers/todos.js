import { ADD_TODO_ITEM } from "../actions/todos"

const initialState = {
    list: [],
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state
    }
}

export default todosReducer