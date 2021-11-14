import {
    GET_EXAMPLES,
    GET_EXAMPLE,
    CREATE_EXAMPLE,
    EDIT_EXAMPLE,
    DEL_EXAMPLE,
    EXAMPLES_LOADED,
    EXAMPLE_SUBMITTED,
    EXAMPLE_ERROR
} from '../actions/types';


const initialState = {
    examples: [],
    example: {},
    loading: true,
    submitting: false,
    token: window.localStorage.getItem('jwt'),
    error: {}
}

const exampleReducer = (state = initialState, action: any) => {
    const {type, payload} = action;
    switch (type) {
        case GET_EXAMPLES:
            return {
                ...state,
                examples: payload,
                loading: false
            };
        case GET_EXAMPLE:
            return {
                ...state,
                example: payload,
                loading: false
            };
        case CREATE_EXAMPLE:
        case EDIT_EXAMPLE:
            return {
                ...state,
                submitting: false
            }
        case DEL_EXAMPLE:
            return {
                ...state,
                loading: true
            }
        case EXAMPLE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case EXAMPLES_LOADED:
            return {
                ...state,
                loading: true
            }
        case EXAMPLE_SUBMITTED:
            return {
                ...state,
                submitting: true
            }
        default:
            return state;
    }

}

export default exampleReducer
export {initialState}