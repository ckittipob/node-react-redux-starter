import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Temp from "./Temp";

it("Should called function", () => {
  const callback = jest.fn();
  const wrapper = shallow(<Temp onSubmit={callback} onClick={callback} />).find(".ye");
  wrapper.simulate("submit");
  expect(callback).toBeCalled();
});
