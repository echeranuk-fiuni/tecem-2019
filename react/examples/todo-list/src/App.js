import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import TodoListContainer from './containers/TodoListContainer'
import HomeContainer from './containers/HomeContainer'
import Error404Container from './containers/Error404Container';
import MenuContainer from './containers/MenuContainer';
import NewTodoItemFormContainer from './containers/NewTodoItemFormContainer';
import TodoItemContainer from './containers/TodoItemContainer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MenuContainer />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/home" exact component={HomeContainer} />
          <Route path="/todos" exact component={TodoListContainer} />
          <Route path="/todos/new" exact component={NewTodoItemFormContainer} />
          <Route path="/todos/:id" component={TodoItemContainer} />
          <Route path="/" component={Error404Container} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
