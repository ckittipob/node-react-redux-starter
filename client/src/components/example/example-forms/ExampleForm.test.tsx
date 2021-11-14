import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ExampleForm from "./ExampleForm";
import { testStore } from "../../../app/utils/test";
import { Store } from "redux";

const setUp = (store: Store) => {
  const props = {
    match: {
      params: {
        id: null
      }
    }
  }
  const wrapper = shallow(
    //@ts-ignore
    <ExampleForm store={store} {...props}/>
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
    const component = wrapper.find(".example-form-container");
    expect(component.length).toBe(1);
  });

});
