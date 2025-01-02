import { Dispatch } from "redux"
import { ActionTypes } from "./actionTypes"
import { Action } from "./actions"

export const sendMessage = (sender: string, message: string) => {
    return (dispatch: Dispatch<Action>) => {
        return dispatch({
            type: ActionTypes.SEND_MESSAGE,
            payload: { sender, message }
        })
    }
}