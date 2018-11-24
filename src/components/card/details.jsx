import React from 'react';
import { Portal } from 'react-portal';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #F8F8F8;
  position: fixed;
  width: 75vw;
  height: 75vh;
  top: 10%;
  left: 15%;
  z-index: 2;
  transition: width 0.1s ease-in-out;
  border: 1px solid #F8F8F8;
  box-shadow: 4px solid black;
  display: flex;
`
const Image = styled.img`
  width: 300px;
  margin: 40px;
`

const Text = styled.div`
  font-size: 20px;
  margin: 16px;
`

const DetailsWrapper = styled.div`
  padding: 40px;
`

export const CardDetails: SComponent<Props> = ({ 
  image,
  name,
  manaCost,
  type,
  rarity,
  setName,
  text,
  flavor = "No description",
  artist,
}) => (
  <Portal>
    <Wrapper>  
      <Image src={image} />    

      <DetailsWrapper>
        <Text> Nome: {name} </Text>
        <Text> Custo de mana: {manaCost} </Text>
        <Text> Tipo: {type} </Text>
        <Text> Raridade: {rarity} </Text>
        <Text> Coleção: {setName} </Text>
        <Text> Texto: {text} </Text>
        <Text> Descrição: {flavor} </Text>
        <Text> Artista: {artist} </Text>
      </DetailsWrapper>
    </Wrapper>
  </Portal>
);

export default CardDetails;
