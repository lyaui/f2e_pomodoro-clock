import React from 'react';
import { Container, Graph, Title, Message } from './style';

const Welcome = () => {
  return (
    <Container>
      <Graph>
        <Title>PODOMORO</Title>
      </Graph>
      <Message>
        You don’t have any task now,
        <br /> please add task first!
      </Message>
    </Container>
  );
};

export default Welcome;
