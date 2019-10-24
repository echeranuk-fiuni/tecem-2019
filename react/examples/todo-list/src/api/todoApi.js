import API from './api'

const getAll = () => API.get('todos')
const deleteItem = id => API.delete('todos/' + id)
const addTodoItem = text => API.post('todos', { text: text })

export default {
    getAll,
    deleteItem,
    addTodoItem
}