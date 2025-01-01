import { LOGIN, LOGOUT } from "./actionTypes";

export const login = (username: string) => ({
    type: LOGIN,
    payload: {username},
})

export const logout = (username: string) => ({
    type: LOGOUT,
    payload: {username},
})