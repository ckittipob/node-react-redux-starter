import {     GET_EXAMPLES,
    GET_EXAMPLE,
    CREATE_EXAMPLE,
    EDIT_EXAMPLE,
    DEL_EXAMPLE,
    EXAMPLES_LOADED,
    EXAMPLE_LOADED,
    EXAMPLE_SUBMITTED,
    EXAMPLE_ERROR } from "./../../actions/types";
  import exampleReducer from "../example";
  
  describe("Example Reducer", () => {
    it("Should return default state", () => {
      const newState = exampleReducer(undefined, {});
      const initialState = {
        examples: [],
        example: {},
        loading: true,
        submitting: false,
        token: window.localStorage.getItem('jwt'),
        error: {}
    };
      expect(newState).toEqual(initialState);
    });

    it("Should return start loading while fetching examples", () => {
        const newState = exampleReducer(undefined, {
            type: EXAMPLES_LOADED
        })
        expect(newState.loading).toBeTruthy();
    })

    it("Should return start loading while fetching exampls", () => {
        const newState = exampleReducer(undefined, {
            type: EXAMPLE_LOADED
        })
        expect(newState.loading).toBeTruthy();
    })

    it("Should return examples and loading finish when get examples", () => {
        const payload = [
            {
                _id: "id",
                name: "test01",
                integer: 3,
                number: 10.21,
            },
            {
                _id: "id",
                name: "test01",
                integer: 3,
                number: 10.21,
            },
        ]
        const newState = exampleReducer(undefined, {
            type: GET_EXAMPLES,
            payload: payload
        })
        expect(newState.examples).toBe(payload);
        expect(newState.loading).toBeFalsy();
    })

    it("Should return example and loading finish when get example", () => {
        const payload = 
            {
                _id: "id",
                name: "test01",
                integer: 3,
                number: 10.21,
            }

        
        const newState = exampleReducer(undefined, {
            type: GET_EXAMPLE,
            payload: payload
        })
        expect(newState.example).toBe(payload);
        expect(newState.loading).toBeFalsy();
    })
    
    it("Should return start loading  when deleted example",() => {
        const newState = exampleReducer(undefined, {
            type: DEL_EXAMPLE
        })
        expect(newState.loading).toBeTruthy();
    })

    it("Should return start submitting when example is submitting",() => {
        const newState = exampleReducer(undefined, {
            type: EXAMPLE_SUBMITTED
        })
        expect(newState.submitting).toBeTruthy();
    })


    it("Should return submitting finish when create example", () => {
        const newState = exampleReducer(undefined, {
            type: CREATE_EXAMPLE
        })
        expect(newState.submitting).toBeFalsy();
    })

    it("Should return submitting finish when edit example", () => {
        const newState = exampleReducer(undefined, {
            type: DEL_EXAMPLE
        })
        expect(newState.submitting).toBeFalsy();
    })
   
    it(("Should return loading finish and error detail when error occurs"),() => {
        const payload = "error-message";
        const newState = exampleReducer(undefined, {
            type: EXAMPLE_ERROR,
            payload: payload
        })
        expect(newState.error).toBe(payload);
        expect(newState.loading).toBeFalsy();
    })

});
  