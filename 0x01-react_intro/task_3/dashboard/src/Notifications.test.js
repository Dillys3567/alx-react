import React from "react";
import Notification from "./Notification";
import { shallow } from "enzyme";

describe("Notification Component test", () => {
  it("Renders without crashing", () => {
    const notification = shallow(<Notification />);
    expect(notification).toBeDefined();
  });
  it("Renders three list items", () => {
    const notification = shallow(<Notification />);
    expect(notification.find("li")).toHaveLength(3);
  });
  it("Renders the text Here is the list of notifications", () => {
    const notification = shallow(<Notification />);
    expect(notification.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
