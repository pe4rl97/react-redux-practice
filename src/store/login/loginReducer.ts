import { Action } from "./actions";
import { ActionTypes } from "./actionTypes";

const initalState : string[] = [];

export const loginReducer = (state : string[] = initalState, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return [...state, action.payload.username];
        case ActionTypes.LOGOUT:
            return state.filter((user) => user !== action.payload.username);
        default: 
            return state;
    }
}