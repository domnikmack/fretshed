import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import notesStatus from './notesStatus'
import selectedNote from './selectedNote'

const reducer = combineReducers({selectedNote, notesStatus})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})
))

const store = createStore(reducer, middleware)

export default store

export * from './notesStatus'
export * from './selectedNote'

