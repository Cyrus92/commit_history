import React from 'react';
import { shallow, mount } from 'enzyme';
import CommitRow from '../component/CommitRow';
describe("CommitRow component", () => {

    it("should render", () => {
        const wrapper = shallow(<CommitRow />);
    });

});