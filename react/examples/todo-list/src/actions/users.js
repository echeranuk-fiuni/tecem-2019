import userApi from '../api/userApi'
import { apiCallWithErrorHandlingDispatcher } from './errors'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export const loginDispatcher = (dispatch, username, password) => {
    return apiCallWithErrorHandlingDispatcher(
        dispatch,
        userApi.login(username, password),
        (data) => {
            dispatch(setCurrentUser(data.user))
            const token = data.user.token
            window.localStorage.setItem('todo-list-auth-token', token)
            window.location.href = '/' // TODO mejorar esto para que recargue el ruteo sin recargar la pagina (o mantener datos en storage)
        }
    )
}

export const resetAuthDispatcher = (dispatch) => {
    dispatch(setCurrentUser(null))
    window.localStorage.removeItem('todo-list-auth-token')
}

export const getCurrentToken = () => {
    return window.localStorage.getItem('todo-list-auth-token')
}