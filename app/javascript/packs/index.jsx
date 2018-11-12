import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from '../components/App'
import IndexReducer from '../reducers'
import IndexSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  IndexReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(IndexSagas)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
