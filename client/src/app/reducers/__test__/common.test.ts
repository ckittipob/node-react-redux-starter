import { SET_APPLOADED } from "./../../actions/types";
  import commonReducer from "../common";
  
  describe("Common Reducer", () => {
    it("Should return default state", () => {
      const newState = commonReducer(undefined, {});
      const initialState = {
        appLoaded: false
      };
      expect(newState).toEqual(initialState);
    });

    it("Should return appLoaded to be true when app is loaded", () => {
        const newState = commonReducer(undefined, {
            type: SET_APPLOADED
        })

        expect(newState.appLoaded).toBeTruthy();
    })

});
  