import styled from 'styled-components/macro';

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 50px;
  left: -30px;
  bottom: 32px;
  border-radius: 25px 5px 5px 25px;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 16px;
  }
`;
