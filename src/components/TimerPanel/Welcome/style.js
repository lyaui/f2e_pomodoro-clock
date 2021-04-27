import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Graph = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  ::before {
    content: '';
    position: absolute;
    width: 65px;
    height: 50px;
    transform: rotate(140deg);
    border-radius: 40%;
    right: 10px;
    top: 20px;
    background-color: var(--secondary-500);
  }
`;

export const Title = styled.h1`
  font-size: var(--xl);
  letter-spacing: 3.6px;
  color: var(--light-gray);
  font-weight: var(--font-weight-light);
`;

export const Message = styled.p`
  font-size: var(--sm);
  color: var(--dark-gray-500);
  letter-spacing: 1.4px;
  line-height: 1.5em;
  text-align: center;
`;

export const TitleSmall = styled.p`
  position: absolute;
  bottom: 50px;
  font-size: var(--xs);
  font-weight: var(--font-weight-light);
`;
