import React from 'react';
import { shallow, mount } from 'enzyme';
import CommitList from '../component/CommitList';
describe("CommitList component", () => {

    it("should render", () => {
        const wrapper = shallow(<CommitList />);
    });

});