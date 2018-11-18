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
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards?page=278')
      .then(res => res.json())
      .then(data => this.setState({ cards: data.cards }));
  }
    
  render() {
    return (
      <AppWrapper>
        { 
          this.state.cards.map((card, idx) => <Card key={idx} card={card} />) 
        }
      </AppWrapper>
    );
  }
}

export default App;
