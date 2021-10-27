import { SET_APPLOADED } from './types';



export const setAppLoaded = () => async (dispatch:any) => {
    try {
        dispatch({
            type: SET_APPLOADED,
        })
    } catch (err) {
        console.log(err)
    }
}