import styled from 'styled-components/macro';

export const Container = styled.nav`
  position: relative;
  width: 80px;
  box-shadow: -3px 3px 12px -4px rgba(0, 0, 0, 0.2);
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
