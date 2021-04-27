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
    width: 7px;
    height: 6px;
    transform: rotate(130deg);
    border-radius: 40%;
    right: 1px;
    background-color: var(--secondary-500);
  }
`;
