import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import PrivateRoute from '../components/PrivateRoute'
import { MyPage, Login, User } from '../containers'
import { fetchLoginState } from '../actions/login'

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
    store.dispatch(fetchLoginState())
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/:username" component={User} />
              <PrivateRoute>
                <Route exact path="/" component={MyPage} />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
