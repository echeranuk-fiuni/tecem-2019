import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router } from 'react-router-dom'
import rootReducer from './reducers'
import App from './App'
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
