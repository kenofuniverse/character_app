import createHistory from 'history/createBrowserHistory'
import { createStore } from 'redux'
import rootReducer from './reducers'

export const history = createHistory()

const initialState = {}

const store = createStore(
  rootReducer,
  initialState
);

export default store
