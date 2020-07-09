import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import listingReducer from './listingReducer';
import myListingsReducer from './myListingsReducer';
import messagesReducer from './messagesReducer';
export default combineReducers({
	user: userReducer,
	form: formReducer,
	listings: listingReducer,
	myListings: myListingsReducer,
	messages: messagesReducer
});
