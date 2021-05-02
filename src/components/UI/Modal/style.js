import styled from 'styled-components/macro';

export const SModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: var(--dark-gray-500);
  opacity: 0.9;
`;

export const SModal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 50px 75px;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
  text-align: center;
`;

export const SModalHeader = styled.div``;

export const SModalBody = styled.div``;

export const SModalFooter = styled.div``;
