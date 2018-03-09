import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import currentNote from './currentNote'

const reducer = combineReducers({currentNote})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})
))

const store = createStore(reducer, middleware)

export default store

export * from './currentNote'

