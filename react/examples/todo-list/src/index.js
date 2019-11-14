import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { Router } from 'react-router-dom'
import rootReducer from './reducers'
import App from './App'
import { createBrowserHistory } from "history"
import logger from 'redux-logger'

const history = createBrowserHistory()

const store = createStore(rootReducer, applyMiddleware(logger))

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
