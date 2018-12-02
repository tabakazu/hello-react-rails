import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import { MyPage, Login } from '../containers'
import { fetchLoginStateRequest } from '../actions/login'

// Reducer
import { rootReducer } from '../reducers'

// Saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

class App extends React.Component {
  componentWillMount() {
    store.dispatch(fetchLoginStateRequest())
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute>
              <Route exact path="/" component={MyPage} />
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
