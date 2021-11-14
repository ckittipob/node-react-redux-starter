import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Confirmation from "../Confirmation";
import { testStore } from "../../../../app/utils/test";
import { Store } from "redux";

const action = jest.fn();

const setUp = (store: Store) => {
  const props = {
    header: "test-header",
    content: "test-content",
    action: action,
    loading: false,
    disable: false,
  };
  const wrapper = shallow(
    //@ts-ignore
    <Confirmation store={store} {...props} />
  );
  return wrapper.dive();
};

describe("Example Component", () => {
  let wrapper: ShallowWrapper;
  let store;

  beforeEach(() => {
    store = testStore({
      modal: {
        open: false,
        body: "test-content",
      },
    });

    wrapper = setUp(store);
  });

  it("Should render without errors", () => {
    const component = wrapper.find(".modal-confirmation");
    expect(component.length).toBe(1);
  });

  it("Should render body", () => {
    expect(wrapper.text().includes("test-content")).toBeTruthy();
  });
});
