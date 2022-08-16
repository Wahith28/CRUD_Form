import React from "react";
import { shallow } from "enzyme";
import AddUser from "../AddUser";

describe("AddUser Component", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AddUser />);
    expect(component).toMatchSnapshot();
  });
});
