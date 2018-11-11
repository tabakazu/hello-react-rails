import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import User from '../components/User'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/:username" component={User} />
        </Switch>
      </Router>
    )
  }
}

export default App
