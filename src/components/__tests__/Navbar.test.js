import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar";

describe("MyComponent", () => {
  const props = {
    users: [],
    value: 10,
  };

  const setValue = jest.fn();
  const value = 0;
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(() => [value, setValue]);

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navbar {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should call tab button", () => {
    const component = shallow(<Navbar {...props} />);
    component.find("[dataLocator='tab-button']").simulate("change");
    setTimeout(() => {
      expect(setValue).toHaveBeenCalledWith(2);
    });
  });
});
