import {createStore, combineReducers} from 'redux';
import {addLikeReducer} from './reducer';
import {determineLocationReducer} from './reducer';

const rootReducer = combineReducers({
  data: addLikeReducer,
  location: determineLocationReducer,

});
const store = createStore(rootReducer);
export default store;
