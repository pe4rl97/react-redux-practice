export enum ActionTypes {
    FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST', //make loading state true
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS', //make loading state true & store API response in the store
    FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE', //make loading state false & store API error response in the store
    SELECT_USER = 'SELECT_USER' // store supplied user id in the store
};