import React from 'react';
import { Container, Item } from './style';

function MenuBar({ menuItems, handleMenuBtnClick, activeItem }) {
  const renderMenuIcons = () =>
    menuItems.map((item) => {
      const IconComponent = item.icon;
      const isActive = activeItem === item.title;
      return (
        <Item key={item.title} isActive={isActive} onClick={() => handleMenuBtnClick(item.title)}>
          <IconComponent></IconComponent>
        </Item>
      );
    });

  return <Container>{renderMenuIcons()}</Container>;
}

export default MenuBar;
