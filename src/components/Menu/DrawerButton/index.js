import React from 'react';
import { useIsMenuVisibleVal } from '../../../context/isMenuVisibleContext';
import { Button } from './style';
import * as Icon from '../../Icons';
import Tomato from '../../UI/Tomato';

const DrawerButton = () => {
  const { isMenuVisible, handleMenuVisible } = useIsMenuVisibleVal();
  return (
    <Button isMenuVisible={isMenuVisible} onClick={handleMenuVisible}>
      <Tomato></Tomato>
      <Icon.Arrow></Icon.Arrow>
    </Button>
  );
};

export default DrawerButton;
