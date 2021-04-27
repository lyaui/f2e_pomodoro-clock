import { useIsMenuVisibleVal } from '../../context/isMenuVisibleContext';
import { Container } from './style';
import { TitleSmall } from '../TimerPanel/Welcome/style';
import React from 'react';
import Welcome from './Welcome';

const TimerPanel = () => {
  const { isMenuVisible } = useIsMenuVisibleVal();
  return (
    <Container isMenuVisible={isMenuVisible}>
      {/* TODO 開場小動畫 */}
      <Welcome></Welcome>
      {/* TODO 統整整理字型 */}
      <TitleSmall>PODOMORO</TitleSmall>
    </Container>
  );
};

export default TimerPanel;
