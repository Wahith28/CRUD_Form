import React from "react";
import { shallow } from "enzyme";
import User from "../User";

describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<User />);

    expect(component).toMatchSnapshot();
  });
});
