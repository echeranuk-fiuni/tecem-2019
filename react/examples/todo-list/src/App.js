import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import TodoListContainer from './containers/TodoListContainer'
import HomeContainer from './containers/HomeContainer'
import Error404Container from './containers/Error404Container';
import GlobalErrorContainer from './containers/GlobalErrorContainer';
import MenuContainer from './containers/MenuContainer';
import NewTodoItemFormContainer from './containers/NewTodoItemFormContainer';
import TodoItemContainer from './containers/TodoItemContainer';
import LoginContainer from './containers/LoginContainer';
import AuthenticatedRoute from './routes/AuthenticatedRoute';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalErrorContainer />
        { window.localStorage.getItem('todo-list-auth-token') && <MenuContainer /> }
        <Switch>
          <AuthenticatedRoute path="/" exact component={HomeContainer} />
          <AuthenticatedRoute path="/home" exact component={HomeContainer} />
          <AuthenticatedRoute path="/todos" exact component={TodoListContainer} />
          <AuthenticatedRoute path="/todos/new" exact component={NewTodoItemFormContainer} />
          <AuthenticatedRoute path="/todos/:id" component={TodoItemContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/" component={Error404Container} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
