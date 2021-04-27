import styled from 'styled-components/macro';

export const Item = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--primary);
  ::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 6px;
    transform: rotate(125deg);
    border-radius: 50%;
    right: 0;
    background-color: var(--secondary-500);
  }
`;
