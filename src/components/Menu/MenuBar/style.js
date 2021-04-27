import styled from 'styled-components/macro';

export const Container = styled.nav`
  position: relative;
  width: 80px;
`;

export const Item = styled.button`
  width: 100%;
  background-color: var(--dark-gray-500);
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
  }

  & path {
    fill: ${(props) => props.isActive && 'var(--primary)'};
  }
`;
