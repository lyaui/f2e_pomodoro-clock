import React from 'react';
import { Container, Item } from './style';
import DrawerButton from '../DrawerButton';

function MenuBar({ menuItems, handleMenuBtnClick, handleToggleMenuBtn, activeItem }) {
  const renderMenuIcons = () =>
    menuItems.map((item) => {
      const IconComponent = item.icon;
      const isActive = activeItem === item.title;
      return (
        <Item
          key={item.title}
          isActive={isActive}
          onClick={() => {
            handleMenuBtnClick(item.title);
            handleToggleMenuBtn(true);
          }}
        >
          <IconComponent></IconComponent>
        </Item>
      );
    });

  return (
    <Container>
      {renderMenuIcons()}
      <DrawerButton handleToggleMenuBtn={handleToggleMenuBtn}></DrawerButton>
    </Container>
  );
}

export default MenuBar;
