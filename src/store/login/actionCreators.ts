import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";
import { Action } from "./actions";

export const login = (username: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: { username }
        })
    }
}

export const logout = (username: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.LOGOUT,
            payload: { username }
        })
    }
}

