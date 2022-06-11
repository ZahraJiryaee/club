import { shallow } from "enzyme";
import React from "react";
import * as reactRedux from "react-redux";
import { shallowToJson } from "enzyme-to-json";

import LuckyWheelPage from "./lucky-wheel.component";

let wrapper;
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();

  wrapper = shallow(<LuckyWheelPage />);
});

it("expect to render LuckyWheelPage component", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
