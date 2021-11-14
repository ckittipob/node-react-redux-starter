import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import A from "../A";

describe("A Component", () => {
  const testAction = jest.fn();
  const props = {
    action: testAction,
    loading: false,
    disable: false,
    css: "",
    text: "test",
    i: <></>,
  };

  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<A {...props} />);
  });

  it("Should render a button", () => {
    const button = component.find("a");
    expect(button.length).toBe(1);
  });

  it("Should call callback function", () => {
    const button = component.find("a");
    button.simulate("click");
    expect(testAction).toBeCalled();
  });
});
