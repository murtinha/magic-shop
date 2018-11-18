import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 0 8px 16px 0;
  display: flex;
  flex-direction: column;
`
const CardBody = styled.img`
  cursor: pointer;
`

const CardFooter = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 4px;
`

const Button = styled.button`
  transition: background-color .3s;
  font-size: 14px;
  font-weight: 500;
  min-height: 36px;
  line-height: 36px;
  padding: 0 12px;
  border-radius: 3px;
  color: black;
  box-shadow: inset 0 0 0 1px #9e9e9e;
  font-family: Roboto;
  background-color: transparent;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-block;

  &:hover {
    color: #fff;
    background-color: #9e9e9e;
  };
`
export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { card } = this.props;
    return (
      <CardWrapper>
        <CardBody src={`${card.imageUrl}`} /> 

        <CardFooter>
          <Button> Adicionar </Button>
        </CardFooter>

      </CardWrapper>
    );
  }
}

export default Card;
