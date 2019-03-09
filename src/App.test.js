import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  let component = null;
  it("should renders correctly", () => {
    component = shallow(<App />);
  });

  it("should matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
