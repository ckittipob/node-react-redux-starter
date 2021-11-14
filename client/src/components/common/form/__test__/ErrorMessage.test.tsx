import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ErrorMessage from "../ErrorMessage";

describe("Error Message Component", () => {
  const props = {
    error: {errors:[{ msg: "error-message" }]},
    text: "error-topfic",
  };
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<ErrorMessage {...props} />);
  });




  it("Should render a form error", () => {
    const button = component.find(".form-error");
    expect(button.length).toBe(1);
  });


  it("Should render an error topic", () => {
      expect(component.text().includes(props.text)).toBeTruthy();
  })

  it("Should render error messages", () => {
    expect(component.text().includes(props.error.errors[0].msg)).toBeTruthy();
  })



});
