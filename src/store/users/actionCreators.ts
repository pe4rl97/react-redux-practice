import axios, { AxiosError } from "axios"
import { ActionTypes } from "./actionTypes"
import { Dispatch } from "redux"
import { Action } from "./actions"
import { Users, UserState } from "./userReducer"
import { ThunkDispatch } from "redux-thunk"

// make loading state true
export const fetchUsersRequest = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.FETCH_USERS_REQUEST
        })
    }
}

// make loading state false & store API response in the store
export const fetchUsersSuccess = (users: Users[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.FETCH_USERS_SUCCESS,
            payload: users
        })
    }
}

// make loading state false & store API error response in the store
export const fetchUsersFailure = (error: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.FETCH_USERS_FAILURE,
            payload: error
        })
    }
}

// store supplied user id in the store
export const selectUser = (userId: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SELECT_USER,
            payload: userId
        })
    }
}

// async action using redux thunk
export const fetchUsers = () => {
    return async (dispatch: ThunkDispatch<UserState, void, Action>) => {
        // dispatch action to update loading state
        dispatch(fetchUsersRequest());
        try {
            const response = await axios.get('http://localhost:9999/users');
            dispatch(fetchUsersSuccess(response.data)); //dispatch action to store users and update loading state
        } catch (error) {
            if (error instanceof AxiosError)
                dispatch(fetchUsersFailure(error.message)); // dispatch action to store error and update loading state
        }
    }
}