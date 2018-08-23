import { combineReducers } from 'redux'; //combining all the reducers
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer //  here you can entermany reducres if you want.
});
