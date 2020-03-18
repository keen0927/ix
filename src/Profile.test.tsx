import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
	it('matches snapshot', () => {
		const wrapper = mount(<Profile name="keen" />);
		expect(wrapper).toMatchSnapshot();
	});
});
