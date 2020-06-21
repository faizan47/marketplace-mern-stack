import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import listingReducer from './listingReducer';
import myListingsReducer from './myListingsReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	listings: listingReducer,
	myListings: myListingsReducer
});
