import React from 'react';
import { shallow, mount } from 'enzyme';
import CommitRow from '../component/CommitRow';
describe("CommitRow component", () => {

    it("should render", () => {
        const wrapper = shallow(<CommitRow />);
    });

    it("should render initial layout", () => {
        // when
        const component = shallow(<CommitRow />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    });

});