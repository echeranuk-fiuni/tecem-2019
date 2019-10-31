import { 
    SET_TODO_ITEMS,
    SET_CURRENT_ITEM
} from "../actions/todos"

const initialState = {
    list: [],
    currentItemId: null,
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODO_ITEMS:
            return {
                ...state,
                list: action.payload
            }
        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItemId: action.payload
            }
        default:
            return state
    }
}

export default todosReducer