import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import './App.css';
import Card from './components/card';

export const Wrapper = styled.div`
  background-color: #F8F8F8;
  position: fixed;
  width: 40vw;
  height: 40vh;
  top: 8%;
  right: 6%;
  z-index: 2;
  transition: width 0.1s ease-in-out;
  border: 1px solid #F8F8F8;
  box-shadow: 4px solid black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
const AppWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
  justify-content: center;
`

const Deck = styled.span`
  padding: 4px;
  height: 20px;
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
      isOpen: false,
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
    this.setState({ deck: [...deck, card] });
  }

  removeCard = (cardId) => {
    const { deck } = this.state;
    const deckWithoutCard = delete deck.cardId;
    this.setState({ deck: deckWithoutCard });
  }

  render() {
    const { deck, isOpen } = this.state;
    return (
      <AppWrapper>
        <AppHeader>
          <Icon onClick={() => this.setState({ isOpen: true })}>
            Meu deck: {deck.length}
          </Icon>
        </AppHeader>
        { 
          this.state.cards.map((card, idx) => <Card key={idx} card={card} addCard={this.addCard} />) 
        }
        {
          isOpen &&
          <Portal>
            <Wrapper>
              {
                deck.map((c,idx) => <Deck key={idx}> - {c.name} </Deck>)
              }
              </Wrapper>
          </Portal>
        }
      </AppWrapper>
    );
  }
}

export default App;
