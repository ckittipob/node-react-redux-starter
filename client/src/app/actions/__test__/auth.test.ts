import moxios from "moxios";
import { testStore } from "../../utils/test";
import { login, logout } from "../auth";

describe("Auth action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  test("Token should be set when user login success", async () => {
    const response = {
        token: 'token'
    }
    const store = testStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response,
      });
    });
    
    await store.dispatch(login({email:'test@test.com', password:'123456'}));
    const newState = store.getState();
    expect(newState.auth.token).toBe(response.token);
    expect(newState.auth.isAuthenticated).toBeTruthy();
  });

  test("Token shouldn't be set when user login fail", async () => {
    const response = {
        token: 'token'
    }
    const store = testStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: response,
      });
    });
    
    await store.dispatch(login({email:'test@test.com', password:'123456'}));
    const newState = store.getState();
    expect(newState.auth.token).toBeNull();
    expect(newState.auth.isAuthenticated).toBeFalsy();
  });

  test("Token should be deleted when user logout", async () => {
    const response = {
        token: 'token'
    }
    const store = testStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response,
      });
    });
    
    await store.dispatch(login({email:'test@test.com', password:'123456'}));
    const newState = store.getState();
    expect(newState.auth.token).toBe(response.token);
    expect(newState.auth.isAuthenticated).toBeTruthy();

    
    await store.dispatch(logout());
    const logoutStore = store.getState();
    expect(logoutStore.auth.token).toBeNull();
    expect(logoutStore.auth.isAuthenticated).toBeFalsy();
  })



});