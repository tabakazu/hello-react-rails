import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:username" component={User} />
        </Switch>
      </div>
    )
  }
}

export default App
