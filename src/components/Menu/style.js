import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  width: ${(props) => (props.isMenuVisible ? '50%' : '80px')};
  height: 100vh;
  background-color: var(--dark-gray-500);
  transition: var(--transition);
`;
