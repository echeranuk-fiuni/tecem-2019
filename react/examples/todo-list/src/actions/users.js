import userApi from '../api/userApi'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export const loginDispatcher = (dispatch, username, password) => {
    return userApi.login(username, password).then(
        response => {
            dispatch(setCurrentUser(response.data.user))
            const token = response.data.user.token
            window.localStorage.setItem('todo-list-auth-token', token)
        }
    )
}

export const getCurrentToken = () => {
    return window.localStorage.getItem('todo-list-auth-token')
}