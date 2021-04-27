import styled from 'styled-components/macro';

export const Container = styled.nav`
  width: 80px;
`;

export const Item = styled.button`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  transition: all 0.5s;
  &:hover {
    background-color: var(--dark-gray);
  }
  path {
    fill: ${(props) => props.isActive && 'var(--primary)'};
  }
`;
