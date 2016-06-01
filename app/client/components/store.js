import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import appReducer from './reducer.js'

const loggerMiddleware = createLogger();

export let store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch actions as functions (and automatically injects the dispatch CB and state on them)
    loggerMiddleware // neat middleware that logs actions and state pre-post reduction
  )
)
