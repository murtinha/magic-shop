import React from 'react';
import { shallow } from 'enzyme';
import { card } from '../../../data';
import CardDetails from '../details';

describe('<CardDetails />', () => {
  describe('render', () => {
    it('should render properly', () => {
      const wrapper = shallow(<CardDetails card={card} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
