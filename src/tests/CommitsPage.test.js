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
    
    

});