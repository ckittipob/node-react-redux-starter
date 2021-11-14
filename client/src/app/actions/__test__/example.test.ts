import moxios from "moxios";
import { testStore } from "../../utils/test";
import { getExample, getExamples } from "../example";

describe("Examples action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly when get examples", async () => {
    const store = testStore({});

    const response = [
      {
        _id: "6188e58e0c8c87002a622978",
        name: "sdsd",
        file: "",
        integer: 0,
        number: 0,
        __v: 0,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response,
      });
    });

    await store.dispatch(getExamples());
    const newState = store.getState();
    expect(newState.example.examples).toBe(response);
    expect(newState.example.loading).toBeFalsy();
  });

  test("Store is updated correctly when get examples but error", async () => {
    const store = testStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: { statusText: "error", status: "error" },
      });
    });

    await store.dispatch(getExamples());
    const newState = store.getState();
    expect(newState.example.error).not.toBeNull();
    expect(newState.example.loading).toBeFalsy();
  });

  test("Store is updated correctly when get example", async () => {
    const store = testStore({});

    const response = {
      _id: "6188e58e0c8c87002a622978",
      name: "sdsd",
      file: "",
      integer: 0,
      number: 0,
      __v: 0,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response,
      });
    });

    await store.dispatch(getExample("id"));
    const newState = store.getState();
    expect(newState.example.example).toBe(response);
    expect(newState.example.loading).toBeFalsy();
  });

  test("Store is updated correctly when get example but error", async () => {
    const store = testStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: { statusText: "error", status: "error" },
      });
    });

    await store.dispatch(getExample("id"));
    const newState = store.getState();
    expect(newState.example.error).not.toBeNull();
    expect(newState.example.loading).toBeFalsy();
  });
  
});
