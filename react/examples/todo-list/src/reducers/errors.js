import { 
    SET_GLOBAL_ERROR
} from "../actions/errors"

const initialState = {
    globalError: null,
}

const errorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.payload
            }
        default:
            return state
    }
}

export default errorReducer