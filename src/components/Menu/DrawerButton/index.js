import React from 'react';
import { Button } from './style';
import * as Icon from '../../Icons';
import Tomato from '../../UI/Tomato';

const DrawerButton = ({ handleToggleMenuBtn }) => {
  return (
    <Button onClick={handleToggleMenuBtn}>
      <Tomato></Tomato>
      <Icon.Arrow></Icon.Arrow>
    </Button>
  );
};

export default DrawerButton;
