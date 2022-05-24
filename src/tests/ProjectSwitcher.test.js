import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectSwitcher from '../component/ProjectSwitcher';
describe("ProjectSwitcher", () => {
  it("should render ProjectSwitcher", () => {
    const wrapper = shallow(<ProjectSwitcher />);
  });

});