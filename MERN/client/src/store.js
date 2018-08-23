import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={};

const middleware = [thunk];
//since we are using redux tool we have to use compose() mddleware
const store = createStore(rootReducer,initialState,compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //copying from web for basic store
));
export default store;
