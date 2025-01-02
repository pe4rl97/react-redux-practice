import { ActionTypes } from "./actionTypes";
import { Users } from "./userReducer";

interface fetchUsersRequestAction {
    type: ActionTypes.FETCH_USERS_REQUEST,
}

interface fetchUsersSuccessAction {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: Users[],
}

interface fetchUsersFailureAction {
    type: ActionTypes.FETCH_USERS_FAILURE,
    payload: string,
}

interface selectUserAction {
    type: ActionTypes.SELECT_USER,
    payload: number,
}

export type Action = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction | selectUserAction; 