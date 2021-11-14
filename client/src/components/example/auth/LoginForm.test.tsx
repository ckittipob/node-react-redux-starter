import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LoginForm from "./LoginForm";
import { testStore } from "../../../app/utils/test";
import { Store } from "redux";

const setUp = (store: Store) => {
  const wrapper = shallow(
    //@ts-ignore
    <LoginForm store={store} />
  );
  return wrapper.dive().dive();
};

describe("Example Component", () => {
  let wrapper: ShallowWrapper;
  let store;
  beforeEach(() => {
    store = testStore({});

    wrapper = setUp(store);
  });


  it("Should render without errors", () => {
    const component = wrapper.find(".login-container");
    expect(component.length).toBe(1);
  });

});
