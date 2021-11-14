import {     OPEN_MODAL,CLOSE_MODAL } from "./../../actions/types";
  import modalReducer from "../modal";
  
  describe("Modal Reducer", () => {

    it("Should return default state", () => {
      const newState = modalReducer(undefined, {});
      const initialState = {
        open: false,
        body: null
      };
      expect(newState).toEqual(initialState);
    });

    it("Should return body and open should be true if open modal is fired", () => {
        const payload = "Test"
        const newState = modalReducer(undefined, {
            type: OPEN_MODAL,
            payload: payload
        })

        expect(newState.body).toBe(payload)
        expect(newState.open).toBeTruthy();
    })

    it("Should return null body and open should be false if close modal is fired", () => {
        const newState = modalReducer(undefined, {
            type: CLOSE_MODAL,
        })
        expect(newState.body).toBeNull();
        expect(newState.open).not.toBeTruthy();
    })

});
  