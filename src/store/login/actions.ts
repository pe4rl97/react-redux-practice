import { ActionTypes } from "./actionTypes";

interface LoginAction {
    type: ActionTypes.LOGIN,
    payload: {
        username: string
    }
}

interface LogoutAction {
    type: ActionTypes.LOGOUT,
    payload: {
        username: string
    }
}

export type Action = LoginAction | LogoutAction;