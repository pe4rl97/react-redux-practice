import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";

const rootReducer = combineReducers({
    loggedInUsers: loginReducer,
});

export default rootReducer;