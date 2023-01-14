import { createStore, combineReducers } from 'redux'
import { addLikeReducer } from './reducer'
import { determineLocationReducer } from './reducer'
import { searchHouse } from './reducer'

const rootReducer = combineReducers({
  data: addLikeReducer,
  location: determineLocationReducer,
  search: searchHouse
})
const store = createStore(rootReducer)
export default store
