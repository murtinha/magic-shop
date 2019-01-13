import React from 'react';

import { shallow } from 'enzyme';
import Card from '../';

describe('<Card />', () => {
  const props = {
    card: {
      image: 'path/imagem.png',
      name: 'Black Lotus',
      manaCost: '0',
      type: 'Artifact',
      rarity: 'Rare',
      setName: 'Magic collection',
      text: 'Card text',
      flavor: 'Card flavor',
      artist: 'murtinha',
    },
  };

  describe('render', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Card {...props}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 
