import { combineReducers } from 'redux'

import characters from './characters'
import multiCharacters from './multiCharacters'
import characterDetail from './characterDetail'
import search from './search'

const rootReducer = combineReducers({
  characters,
  multiCharacters,
  characterDetail,
  search,
})

export default rootReducer
