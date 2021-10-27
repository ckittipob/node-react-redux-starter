import { formatDiagnostic } from "typescript";
import agent from "../api/agent";
import { IExampleFormValues } from "../models/example";
import {
  GET_EXAMPLES,
  GET_EXAMPLE,
  CREATE_EXAMPLE,
  EDIT_EXAMPLE,
  DEL_EXAMPLE,
  EXAMPLE_ERROR,
  EXAMPLES_LOADED,
  EXAMPLE_LOADED,
  EXAMPLE_SUBMITTED,
  GET_EXAMPLES_PROTECTED
} from "./types";

// Get Examples
export const getExamples = () => async (dispatch: any) => {
  dispatch({ type: EXAMPLES_LOADED });
  try {
    const res = await agent.Examples.list();
    dispatch({
      type: GET_EXAMPLES,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: EXAMPLE_ERROR
    });
  }
};

// Get Examples
export const getProtected = () => async (dispatch: any) => {
  dispatch({ type: EXAMPLES_LOADED });
  try {
    const res = await agent.Examples.protected();
    dispatch({
      type: GET_EXAMPLES_PROTECTED,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: EXAMPLE_ERROR
    });
  }
};

//Get Example
export const getExample = (id: string) => async (dispatch: any) => {
  let example;
  dispatch({ type: EXAMPLE_LOADED });
  try {
    console.log('this');
    const res = await agent.Examples.detail(id);
    example = res;
    dispatch({
      type: GET_EXAMPLE,
      payload: res,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: EXAMPLE_ERROR
    });
  }
  return example
};

//Create Example
export const createExample = (example: IExampleFormValues) => async (dispatch: any) => {
  dispatch({ type: EXAMPLE_SUBMITTED });
  try {
    await agent.Examples.create(example);
    dispatch({
      type: CREATE_EXAMPLE,
    });
  } catch (err: any) {
    dispatch({
      type: EXAMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Edit Example
export const editExample = (example: IExampleFormValues) => async (dispatch: any) => {
  dispatch({ type: EXAMPLE_SUBMITTED });
  try {
    await agent.Examples.edit(example);
    dispatch({
      type: EDIT_EXAMPLE,
    });
  } catch (err: any) {
    dispatch({
      type: EXAMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Del Example
export const delExample = (id: string) => async (dispatch: any) => {
  dispatch({ type: EXAMPLES_LOADED });
  try {
    await agent.Examples.delete(id);
    dispatch({
      type: DEL_EXAMPLE,
    });
  } catch (err: any) {
    dispatch({
      type: EXAMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


//Login - Set Token
