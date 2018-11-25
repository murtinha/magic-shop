import React, { Component } from 'react';

import CardDetails from './details';

import './index.css';

export class Card extends Component {
  constructor() {
    super();
    this.state =  {
      isOpen: false,
      isAdded: false,
    };
  }

  addCard = () => {
    const { card } = this.props;
    this.setState({ isAdded: true });
    this.props.addCard({ name: card.name, cardId: card.id });
  }

  render() {
    const { card, addCard } = this.props;
    const { isOpen, isAdded } = this.state;
    const text = isAdded
      ? 'Adicionada'
      : 'Adicionar';
    return (
      <div className="cardWrapper">
        <img className="cardBody" onClick={() => this.setState({ isOpen: true })} src={card.imageUrl} /> 
        {
          isOpen && 
          <CardDetails 
            onClose={()=> this.setState({ isOpen: false })}
            image={card.imageUrl}
            name={card.name}
            manaCost={card.manaCost}
            type={card.type}
            rarity={card.rarity}
            setName={card.setName}
            text={card.text}
            flavor={card.flavor}
            artist={card.artist}
          />
        }
        <div className="cardFooter">
          <button className="btn" isAdded={isAdded} onClick={this.addCard}> {text} </button>
        </div>

      </div>
    );
  }
}

export default Card;
