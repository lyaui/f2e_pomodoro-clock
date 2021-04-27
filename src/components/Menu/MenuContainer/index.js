import React from 'react';
import { Container, Title } from './style';

const MenuContainer = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default MenuContainer;
