import { shallow } from "enzyme";
import React from "react";
import { shallowToJson } from "enzyme-to-json";

import Footer from "./footer.component";

let wrapper;
// let pathname = "profile";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "profile",
  }),
}));

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

it("expect to render Footer component with profile path", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();

  expect(wrapper.find(".footer-wrapper").prop("style")).toHaveProperty(
    "--footer-indicator-number",
    -2
  );
});
