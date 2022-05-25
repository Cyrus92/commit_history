import React from 'react';
import { shallow, mount } from 'enzyme';
import CommitsPage from '../views/CommitsPage';
describe("CommitsPage component", () => {

    it("should render", () => {
        const wrapper = shallow(<CommitsPage />);
    });

    it("should render initial layout", () => {
        // when
        const component = shallow(<CommitsPage />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    });

    it("should update commitsData to match commits in ProjectSwitcher after calling setCommitsData in ProjectSwitcher" , () => {
        // given
        const component = mount(<CommitsPage />);
        const ProjectSwitcherComponent = component.find('ProjectSwitcher');
        const instance = ProjectSwitcherComponent.instance();
        // when
        ProjectSwitcherComponent.props().setCommitsData("data");
        // then
        expect(component.state('commitsData')).toEqual('data');
    });
    
    

});