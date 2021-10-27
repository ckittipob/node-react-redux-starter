import { OPEN_MODAL, CLOSE_MODAL } from './types';



export const openModal = (content: any) => async (dispatch:any) => {
    try {
        dispatch({
            type: OPEN_MODAL,
            payload: content
        })
    } catch (err) {
        console.log(err)
    }
}

export const closeModal = () => async (dispatch:any) => {
    try {
        dispatch({
            type: CLOSE_MODAL,
        })
    } catch (err) {
        console.log(err)
    }
}