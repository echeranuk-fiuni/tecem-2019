import { isEmpty } from 'lodash'

export const getConfigHeaders = () => {
    const authToken = window.localStorage.getItem('todo-list-auth-token')
    if (isEmpty(authToken)) return {}

    return {headers: {Authorization: 'Bearer ' + authToken}}
}