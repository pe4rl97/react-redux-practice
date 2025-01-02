import { ActionTypes } from "./actionTypes";
import { MessageState } from "./chatReducer";

interface SendMessageAction {
    type: ActionTypes.SEND_MESSAGE,
    payload: MessageState
}

export type Action = SendMessageAction;