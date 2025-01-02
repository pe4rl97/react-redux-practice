import { Action } from "./actions";
import { ActionTypes } from "./actionTypes";

export interface Users {
    id: number,
    url: string,
    birthDate: string,
    name: string,
    occupation: string
}

export interface UserState {
    users: Users[],
    loading: boolean,
    error: string | null,
    selectedUserId: number | null
}

const initialState : UserState = { 
    users: [],
    loading: false,
    error: null,
    selectedUserId: null
}

const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        // make loading state true 
        case ActionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        //make loading state false & store API response in the store
        case ActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        // make laoding state false & store API response in the store
        case ActionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        // store supplied user id in the store
        case ActionTypes.SELECT_USER:
            return {
                ...state,
                selectedUserId: action.payload,
            }

        default: 
            return state
    }
}

export default userReducer;