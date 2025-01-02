import { Action } from "./actions";
import { ActionTypes } from "./actionTypes";

export interface MessageState {
    sender: string,
    message: string
}

const initialState: MessageState[] = [];

const chatReducer = (state: MessageState[] = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.SEND_MESSAGE:
            return [...state, {...action.payload}];
        default: 
            return state;
    }
}

export default chatReducer;