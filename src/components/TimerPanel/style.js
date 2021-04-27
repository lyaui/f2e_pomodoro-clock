import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 100vh;
  width: ${(props) => (props.isMenuVisible ? '50%' : 'calc(100% - 80px)')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
`;
