import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectSwitcher from '../component/ProjectSwitcher';
describe("ProjectSwitcher component", () => {

    it("should render", () => {
        const wrapper = shallow(<ProjectSwitcher />);
    });

    it("should render initial layout", () => {
        // when
        const component = shallow(<ProjectSwitcher />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    });

    it("should create owner, totalCommits and commits states", () => {
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
    
    it("should create owner state with the event value", () => {
        // given
        const component = shallow(<ProjectSwitcher />);
        const form = component.find('#owner');
        // when
        form.props().onChange({target: {
        name: 'myName',
        value: 'newValue'
        }});
        // then
        expect(component.state('owner')).toEqual('newValue');
    });

    it("should create repo, totalCommits and commits states", () => {
        // given
        const component = shallow(<ProjectSwitcher />);
        const form = component.find('#repo');
        // when
        form.props().onChange({target: {
        name: 'myName',
        value: 'myValue'
        }});
        // then
        expect(component.state('repo')).toBeDefined();
        expect(component.state('totalCommits')).toBeDefined();
        expect(component.state('commits')).toBeDefined();
    });

    
    it("should create repo state with the event value", () => {
        // given
        const component = shallow(<ProjectSwitcher />);
        const form = component.find('#repo');
        // when
        form.props().onChange({target: {
        name: 'myName',
        value: 'newValue'
        }});
        // then
        expect(component.state('repo')).toEqual('newValue');
    });

    it("should create totalCommits and commits states after calling fetchCommits function", () => {
        // given
        const component = shallow(<ProjectSwitcher />);
        const instance = component.instance();
        // when
        instance.fetchCommits();
        // then        
        expect(component.state('totalCommits')).toBeDefined();
        expect(component.state('commits')).toBeDefined();
    });

    
    

});