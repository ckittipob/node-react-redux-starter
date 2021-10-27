import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/types'

const initialState = {
    open: false,
    body: null
}


const modalReducer = (state = initialState, action:any) => {
    const {type, payload} = action;
    switch(type) {
        case OPEN_MODAL:
            return {
                ...state,
                open: true,
                body: payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open: false,
                body: null
            }
        default:
            return state;
    }
}

export default modalReducer;