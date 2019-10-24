import { 
    SET_TODO_ITEMS 
} from "../actions/todos"

const initialState = {
    list: [],
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODO_ITEMS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default todosReducer