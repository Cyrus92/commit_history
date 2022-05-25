import React from 'react';
import { shallow, mount } from 'enzyme';
import CommitList from '../component/CommitList';
describe("CommitList component", () => {

    it("should render", () => {
        const wrapper = shallow(<CommitList />);
    });

    it("should render initial layout", () => {
        // when
        const component = shallow(<CommitList />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    });

});