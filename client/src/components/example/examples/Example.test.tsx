import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Example from "./Examples";
import { testStore } from "../../../app/utils/test";
import { Store } from "redux";

const setUp = (store: Store) => {
  const wrapper = shallow(
    //@ts-ignore
    <Example store={store} />
  );
  return wrapper.dive().dive();
};

describe("Example Component", () => {
  let wrapper: ShallowWrapper;
  let store;
  beforeEach(() => {
    store = testStore({
      example: {
        examples: [
          {
            _id: "6188e58e0c8c87002a622978",
            name: "sdsd",
            file: "",
            integer: 0,
            number: 0,
            __v: 0,
          },
        ],
        loadingExamples: false,
      },
    });

    wrapper = setUp(store);
  });


  it("Should render without errors", () => {
    const component = wrapper.find(".examples-container");
    expect(component.length).toBe(1);
  });

  it("Should render table with 1 element", () => {
    const component = wrapper.find("tbody").find("tr");
    expect(component.length).toBe(1);
  });
});
