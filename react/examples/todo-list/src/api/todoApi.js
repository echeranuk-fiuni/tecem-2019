import API from './api'
import { getConfigHeaders } from './utils'

const getAll = () => API.get('todos', getConfigHeaders())
const deleteItem = id => API.delete('todos/' + id, getConfigHeaders())
const addTodoItem = text => API.post('todos', { text: text }, getConfigHeaders())

export default {
    getAll,
    deleteItem,
    addTodoItem
}