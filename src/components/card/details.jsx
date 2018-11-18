import React from 'react';
import styled from 'styled-components';

const CardDetailsWrapper = styled.div`
  background-color: white;
  position: fixed;
  width: 80%;
  height: 80vh;
  top: 10%;
  left: 10%;
  z-index: 2;
  transition: width 0.1s ease-in-out;
`

export const CardDetails: SComponent<Props> = ({ 
  image,
  name,
  manaCost,
  type,
  rarity,
  setName,
  text,
  flavor,
  artist,
}) => (
  <CardDetailsWrapper />  
);

export default CardDetails;
