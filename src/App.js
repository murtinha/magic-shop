import React, { Component } from 'react';
import { Portal } from 'react-portal';
import './App.css';
import Card from './components/card';

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
    this.setState({ deck: [...deck, card] });
  }

  removeCard = (index) => {
    const { deck } = this.state;
    deck.splice(index, 1);
    this.setState({ deck });
  }

  render() {
    const { deck, isOpen } = this.state;
    return (
      <div className="appWrapper">
        <div className="appHeader">
          MONTE SEU DECK DE COMMANDER!
          <span className="icon" onClick={() => this.setState({ isOpen: true })}>
            Meu deck: {deck.length}
          </span>
        </div>
        { 
          this.state.cards.map((card, idx) => <Card key={idx} card={card} addCard={this.addCard} />) 
        }
        {
          isOpen &&
          <Portal>
            <div className="wrapper">
              {
                deck.map((c,idx) => <div className="deck" key={idx} onClick={() => this.removeCard(idx)}> - {c.name} </div>)
              }
              </div>
          </Portal>
        }
      </div>
    );
  }
}

export default App;
