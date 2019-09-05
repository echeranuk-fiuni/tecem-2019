import React from 'react'
import Greetings from './Greetings'
import Greetings2 from './Greetings2'
import './App.css'
import UserGreetings from './UserGreetings'
import Clock from './Clock'

class App extends React.Component {
  
  render() {

    const user = {
      firstname: 'Juan',
      lastname: 'Perez'
    }

    return (
      <div>
        <Greetings />
        <UserGreetings userObject={user} />
        <Greetings2>
          <span style={{'color':'#FF0000'}}>
            Hello World
          </span>
        </Greetings2>
        <Clock />
      </div>
    )
  }
}

export default App
