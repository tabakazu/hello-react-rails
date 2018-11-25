import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import { Login } from '../containers'
import { loginRequest } from '../actions/auth'

// Reducer
import { authReducer } from '../reducers'

// Saga
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  authReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
