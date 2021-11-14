import { testStore } from "../../utils/test";
import { openModal, closeModal } from "../modal";

describe("Auth action", () => {
    test("Store is updated correctly when open modal", async () => {
        const body = "test"
        const store = testStore({});
        await store.dispatch(openModal(body));
        const newState = store.getState();
        expect(newState.modal.body).toBe(body);
        expect(newState.modal.open).toBeTruthy();
    })

    test("Store is updated correctly when close modal", async () => {
        const store = testStore({});
        await store.dispatch(closeModal());
        const newState = store.getState();
        expect(newState.modal.body).toBeNull();
        expect(newState.modal.open).toBeFalsy();
    })
})