import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectSwitcher from '../component/ProjectSwitcher';
describe("ProjectSwitcher", () => {
  it("should render ProjectSwitcher", () => {
    const wrapper = shallow(<ProjectSwitcher />);
  });

  it("should render initial layout", () => {
    // when
    const component = shallow(<ProjectSwitcher />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should create an entry in component state", () => {
    // given
    const component = shallow(<ProjectSwitcher />);
    const form = component.find('#owner');
    // when
    form.props().onChange({target: {
       name: 'myName',
       value: 'myValue'
    }});
    // then
    expect(component.state('owner')).toBeDefined();
    expect(component.state('totalCommits')).toBeDefined();
    expect(component.state('commits')).toBeDefined();
  });

  

});