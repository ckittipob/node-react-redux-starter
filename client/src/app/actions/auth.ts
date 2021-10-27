import agent from '../api/agent';
import { IUserFormValues } from '../models/user';
import { AUTH_FAIL, LOGIN_SUCCESS, USER_LOADED, LOGOUT } from './types';
import { history } from '../../components/layout/App';


export const login = (user: IUserFormValues) => async (dispatch:any) => {
    try {
        const res = await agent.User.login(user);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })

        history.push('/')
    } catch (err: any) {
        throw err.response.data;
    }
}

export const getUser = () => async(dispatch: any) => {
    try {
        let authStatus = false;
        if (window.localStorage.getItem("token") !== null) {
            authStatus = true;
        }
        
        dispatch({
            type:USER_LOADED,
            payload: authStatus
        })
    }catch(err) {
        dispatch({
            type:AUTH_FAIL
        })
    }
}

export const logout = () => async(dispatch: any) => {
    try {
        dispatch ({
            type: LOGOUT
        })
        history.push('/login')
    } catch (err) {
        console.log(err);
    }
}