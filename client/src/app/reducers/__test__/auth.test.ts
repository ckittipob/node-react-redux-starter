import {
  AUTH_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
} from "./../../actions/types";
import authReducer, {initialState} from "../auth";

describe("Auth Reducer", () => {
  it("Should return default state", () => {
    const newState = authReducer(undefined, {});
    const state = initialState;
    expect(newState).toEqual(state);
  });

  it("Should return Authenticated if login successful", () => {
    const payload = [{ token: "token" }];
    const newState = authReducer(undefined, {
      type: LOGIN_SUCCESS,
      payload: payload,
    });
    expect(newState.isAuthenticated).toEqual(true);
  });

  it("Should return not Authenticated if auth fail", () => {
    const newState = authReducer(undefined, {
      type: AUTH_FAIL,
    });
    expect(newState.isAuthenticated).toEqual(false);
  });

  it("Should return not Authenticated and delete token if logout", () => {
    const payload = [{ token: "token" }];

    const loginState = authReducer(undefined, {
      type: LOGIN_SUCCESS,
      payload: payload,
    });
    expect(loginState.isAuthenticated).toEqual(true);

    const logoutState = authReducer(undefined, { type: LOGOUT });
    expect(logoutState.isAuthenticated).toEqual(false);
    expect(logoutState.token).toEqual(null);
  });

  it("Should return authenticated if userloaded", () => {
    const newState = authReducer(undefined, {
      type: USER_LOADED,
      payload: true,
    });
    expect(newState.isAuthenticated).toBeTruthy();
  });
});
