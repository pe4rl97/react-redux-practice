import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import bankReducer from "./bank/bankReducers";
import chatReducer from "./chat/chatReducer";

const rootReducer = combineReducers({
    loggedInUsers: loginReducer,
    chatMessages: chatReducer,
    bank: bankReducer
});

export default rootReducer;