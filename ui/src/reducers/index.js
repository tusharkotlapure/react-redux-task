import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

import listingStore from './reducer-listing';
/* combine all reducer */
const reducers = combineReducers({
	listingStore
});

/* create store and apply required middleware */
export default createStore(reducers, applyMiddleware(ReduxThunk));

