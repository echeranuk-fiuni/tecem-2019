import { resetAuthDispatcher } from './users'

export const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR'

export const setGlobalError = error => {
    return {
        type: SET_GLOBAL_ERROR,
        payload: error
    }
}

export const apiCallWithErrorHandlingDispatcher = 
    (dispatch, apiCallPromise, successAction) => {
        dispatch(setGlobalError(null))
        return apiCallPromise
            .then( response => {
                console.log('THEN')
                console.log(response)
                const data = response.data
                successAction(data)
            })
            .catch( response => {
                const res = response.response // TODO mejorar esto
                if (res.status === 401) {
                    resetAuthDispatcher(dispatch)
                    dispatch(setGlobalError({
                        type: 'UNAUTHORIZED',
                        message: res.data.message
                    }))
                } else {
                    dispatch(setGlobalError({
                        type: 'GENERIC-ERROR',
                        message: res.data.message
                    }))
                }
                console.log('CATCH')
                console.log(response)
            })
}