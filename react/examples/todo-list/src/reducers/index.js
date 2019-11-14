import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'
import errors from './errors'

export default combineReducers({
  todos: todos,
  users: users,
  errors: errors,
})