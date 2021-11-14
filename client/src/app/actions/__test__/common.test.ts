import { testStore } from "../../utils/test";
import { setAppLoaded } from "../common";

describe("Auth action", () => {
    test("Store is updated correctly", async () => {
        const store = testStore({});
        await store.dispatch(setAppLoaded());
        const newState = store.getState();
        expect(newState.common.appLoaded).toBeTruthy();
    })
})