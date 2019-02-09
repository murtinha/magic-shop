import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const cards = [
    {
      image: 'path/imagem.png',
      name: 'Black Lotus',
      id: 1,
      manaCost: '0',
      type: 'Artifact',
      rarity: 'Rare',
      setName: 'Magic collection',
      text: 'Card text',
      flavor: 'Card flavor',
      artist: 'murtinha',
    },
    {
      image: 'path/imagem2.png',
      name: 'Bufao',
      id: 2,
      manaCost: 'B2G',
      type: 'Creature',
      rarity: 'Legend',
      setName: 'Magic collection 2',
      text: 'Card text 2',
      flavor: 'Card flavor 2',
      artist: 'murtinha2',
    }
  ];
  const deck = [
    {
      name: 'Black Lotus',
      cardId: 1,
    },
    {
      name: 'Bufao',
      cardId: 2,
    }
  ];
  const renderShallowWrapper = () => shallow(<App />);

  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = renderShallowWrapper();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with cards', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ cards });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly opened', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ isOpen: true, deck });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    const mockFetch = global.fetch;

    afterEach(() => {
      global.fetch = mockFetch;
    });

    it('should fetch cards on did mount', () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve());
      const wrapper = renderShallowWrapper();
      const url = 'https://api.magicthegathering.io/v1/cards?page=28';
      wrapper.instance().componentDidMount();

      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('should add card properly', () => {
      const wrapper = renderShallowWrapper();
      const card = { name: 'Forest', cardId: 3 };
      wrapper.setState({ deck }); 
      wrapper.instance().addCard(card);
      expect(wrapper.state('deck')).toEqual([
        ...deck,
        card,
      ]);
    });

    it('should remove card properly', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ deck }); 
      wrapper.instance().removeCard(2);
      expect(wrapper.state('deck')).toEqual([
        deck[0],
      ]);
    });

    it('should toggle state properly', () => {
      const wrapper = renderShallowWrapper();
      wrapper.instance().toggleOpen();
      expect(wrapper.state('isOpen')).toBeTruthy();
      wrapper.instance().toggleOpen();
      expect(wrapper.state('isOpen')).toBeFalsy();
    });
  });
});
