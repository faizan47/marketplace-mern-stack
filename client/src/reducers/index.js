import { combineReducers } from "redux";
import userReducer from "./userReducer";
import listingReducer from "./listingReducer";
import myListingsReducer from "./myListingsReducer";
import messagesReducer from "./messagesReducer";
import conversationReducer from "./conversationReducer";

export default combineReducers({
    user: userReducer,
    listings: listingReducer,
    myListings: myListingsReducer,
    messages: messagesReducer,
    conversation: conversationReducer,
});
