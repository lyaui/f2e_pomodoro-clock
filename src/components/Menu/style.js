import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  max-width: ${(props) => (props.isMenuVisible ? '50%' : '80px')};
  height: 100vh;
  background-color: var(--dark-gray-500);

  transition: var(--transition);
`;
