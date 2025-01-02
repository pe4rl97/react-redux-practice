import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import bankReducer from "./bank/bankReducers";
import chatReducer from "./chat/chatReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    loggedInUsers: loginReducer,
    chatMessages: chatReducer,
    bank: bankReducer,
    users: userReducer,
});

export default rootReducer;