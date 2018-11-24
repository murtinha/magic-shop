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

const AppHeader = styled.div`
  padding: 8px;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 8px;
`

const Icon = styled.span`
  cursor: pointer;
  float: right;
  font-size: 25px;
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
    this.setState({ deck: [...deck, {[cardId]: {...card } }] });
  }

  removeCard = (cardId) => {
    const { deck } = this.stae;
    const deckWithoutCard = delete deck.cardId;
    this.setState({ deck: deckWithoutCard });
  }

  render() {
    const { deck } = this.state;
    return (
      <AppWrapper>
        <AppHeader>
          <Icon>
            Meu deck: {deck.length}
          </Icon>
        </AppHeader>
        { 
          this.state.cards.map((card, idx) => <Card key={idx} card={card} addCard={this.addCard} />) 
        }
      </AppWrapper>
    );
  }
}

export default App;
