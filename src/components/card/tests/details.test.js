import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from '../details';

describe('<CardDetails />', () => {
  const props = {
    image: 'path/imagem.png',
    name: 'Black Lotus',
    manaCost: '0',
    type: 'Artifact',
    rarity: 'Rare',
    setName: 'Magic collection',
    text: 'Card text',
    flavor: 'Card flavor',
    artist: 'murtinha',
  };

  describe('render', () => {
    it('should render properly', () => {
      const wrapper = shallow(<CardDetails {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
