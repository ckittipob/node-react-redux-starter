import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import NotFound from "../NotFound";
import createBrowserHistory from "history/createBrowserHistory";
export const history = createBrowserHistory();



const setUp = (props = {}) => {
  const component = shallow(<NotFound {...props} />);
  return component;
};

describe("NotFound Component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".app-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a search icon", () => {
    const icon = component.find(".fa-search");
    expect(icon.length).toBe(1);
  });

  it("Should have a link that redirect to home page", () => {
    const link = component.find(`[to='/']`);
    expect(link.length).toBe(1);
  });

});
