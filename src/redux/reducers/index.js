import { combineReducers } from 'redux'

import characters from './characters'
import characterDetail from './characterDetail'

const rootReducer = combineReducers({
  characters,
  characterDetail,
})

export default rootReducer
