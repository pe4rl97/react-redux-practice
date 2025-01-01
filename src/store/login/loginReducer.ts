import { LOGIN, LOGOUT } from "./actionTypes";

export interface StateInterface {
    loggedInUsers: string[]
}

export interface ActionInterface {
    type: string;
    payload: {
        username: string
    }
}

export const loginReducer = (state = [], action: ActionInterface) => {
    switch (action.type) {
        case LOGIN:
            return [...state, action.payload.username];
        case LOGOUT:
            return state.filter((user) => user !== action.payload.username);
        default: 
            return state;
    }
}