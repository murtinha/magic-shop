import React from 'react';

import { shallow } from 'enzyme';
import Card from '../';

describe('<Card />', () => {
  const onAdd = jest.fn();
  const onRemove = jest.fn();
  const props = {
    card: {
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
    onAdd,
    onRemove,
  };
  const renderShallowWrapper = () => shallow(<Card {...props} />);

  describe('render', () => {
    it('should render properly', () => {
      const wrapper = renderShallowWrapper();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render properly added', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ isAdded: true });
      const div = wrapper.find('.cardFooter');
      expect(div).toMatchSnapshot();
    });

    it('should render properly opened', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ isOpen: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should initialize with correct state', () => {
      const wrapper = renderShallowWrapper();
      expect(wrapper.state()).toEqual({
        isOpen: false,
        isAdded: false,
      });
    });

    it('should set state on image click', () => {
      const wrapper = renderShallowWrapper();
      const img = wrapper.find('.cardBody');
      img.simulate('click');
      expect(wrapper.state().isOpen).toBeTruthy();
    });

    it('should set state on close details', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ isOpen: true });
      expect(wrapper.state().isOpen).toBeTruthy();

      const details = wrapper.find('CardDetails');
      details.simulate('close');
      expect(wrapper.state().isOpen).toBeFalsy();
    });
    
    it('should add card on button click', () => {
      const wrapper = renderShallowWrapper();
      const button = wrapper.find('.btn');
      button.simulate('click');
      expect(wrapper.state().isAdded).toBeTruthy();
      expect(onAdd).toHaveBeenCalledWith({
        name: props.card.name,
        cardId: props.card.id,
      });
    });

    it('should remove card on button click if its added already', () => {
      const wrapper = renderShallowWrapper();
      wrapper.setState({ isAdded: true });
      expect(wrapper.state().isAdded).toBeTruthy();
      const button = wrapper.find('.btn.added');
      button.simulate('click');
      expect(wrapper.state().isAdded).toBeFalsy();
      expect(onRemove).toHaveBeenCalledWith(props.card.id);
    });
  });
}); 
