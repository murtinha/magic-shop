import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './components/card';

const AppWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
  justify-content: center;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      deck: [],
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards?page=278')
      .then(res => res.json())
      .then(data => this.setState({ cards: data.cards }));
  }
    
  addCard = (card) => {
    const { deck } = this.state;
    const { cardId } = card;

    if (deck[cardId]) {
      const incrementedCard = {
        ...deck[cardId],
        amount: deck[cardId].amount + 1,
      };
      this.setState({ deck: [...this.state.deck, ...incrementedCard] });
      return;
    }

    this.setState({ deck: [...this.state.deck, ...card] });
  }

  removeCard = (cardId) => {
    const { deck } = this.stae;
    const deckWithoutCard = delete deck.cardId;
    this.setState({ deck: deckWithoutCard });
  }

  render() {
    return (
      <AppWrapper>
        { 
          this.state.cards.map((card, idx) => <Card key={idx} card={card} addCard={this.addCard} />) 
        }
      </AppWrapper>
    );
  }
}

export default App;
