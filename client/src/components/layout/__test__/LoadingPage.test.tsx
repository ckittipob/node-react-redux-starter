import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LoadingPage from "../LoadingPage";




const setUp = (props = {}) => {
  const component = shallow(<LoadingPage {...props} />);
  return component;
};

describe("Loading Component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".loading-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a loading icon", () => {
    const icon = component.find(".fa-circle-notch");
    expect(icon.length).toBe(1);
  });


});
