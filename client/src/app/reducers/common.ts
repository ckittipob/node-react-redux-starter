import {
    SET_APPLOADED
} from '../actions/types'

const initialState = {
    appLoaded: false
}


const commonReducer = (state = initialState, action:any) => {
    const {type} = action;
    switch(type) {
        case SET_APPLOADED:
            return {
                ...state,
                appLoaded: true
            }
        default:
            return state;
    }
}

export default commonReducer;