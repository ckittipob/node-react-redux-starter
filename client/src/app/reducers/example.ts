import {
    GET_EXAMPLES,
    GET_EXAMPLE,
    GET_EXAMPLES_PROTECTED,
    CREATE_EXAMPLE,
    EDIT_EXAMPLE,
    DEL_EXAMPLE,
    EXAMPLES_LOADED,
    EXAMPLE_LOADED,
    EXAMPLE_SUBMITTED,
    EXAMPLE_ERROR
} from '../actions/types';


const initialState = {
    examples: [],
    example: {},
    examplesProtected: [],
    loading: true,
    loadingExamples: true,
    loadingExample: true,
    submittingExample: false,
    appLoaded: false,
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
                loadingExamples: false
            };
        case GET_EXAMPLES_PROTECTED:
            return {
                ...state,
                examplesProtected: payload,
                loadingExamples: false
            };
        case GET_EXAMPLE:
            return {
                ...state,
                example: payload,
                loadingExample: false
            };
        case CREATE_EXAMPLE:
        case EDIT_EXAMPLE:
            return {
                ...state,
                submittingExample: false
            }
        case DEL_EXAMPLE:
            return {
                ...state,
                loadingExamples: true
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
                loadingExamples: true
            }
        case EXAMPLE_LOADED:
            return {
                ...state,
                loadingExample: true
            }
        case EXAMPLE_SUBMITTED:
            return {
                ...state,
                submittingExample: true
            }
        default:
            return state;
    }

}

export default exampleReducer