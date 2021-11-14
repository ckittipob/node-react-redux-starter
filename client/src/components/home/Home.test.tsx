import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Home from "./Home";

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} />);
  return component;
};

describe("Home Component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".app-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a clip board icon", () => {
    const icon = component.find(".fa-clipboard-list");
    expect(icon.length).toBe(1);
  });

  it("Should have a route to example page", () => {
    const link = component.find(`[to='/examples']`);
    expect(link.length).toBe(1);
  });
});
