import React, { useState } from 'react';
import { useIsMenuVisibleVal } from '../../context/isMenuVisibleContext';
import { Container } from './style';
import { MENU_ITEMS } from '../../constant';
import * as Icon from '../Icons';
// menu
import MenuBar from './MenuBar';
import MenuContainer from './MenuContainer';
// menu panels
import AddTodo from '../MenuPanels/AddTodo';
import ManageTodos from '../MenuPanels/ManageTodos';
import StatisticReport from '../MenuPanels/StatisticReport';
import ManageSounds from '../MenuPanels/ManageSounds';

const Menu = () => {
  const { isMenuVisible } = useIsMenuVisibleVal();
  const [selectedPanel, setSelectedPanel] = useState(MENU_ITEMS.ADD_TASK);

  const menuItems = [
    { title: MENU_ITEMS.ADD_TASK, icon: Icon.AddTask, component: AddTodo },
    { title: MENU_ITEMS.TASK_LISTS, icon: Icon.List, component: ManageTodos },
    { title: MENU_ITEMS.ANALYTICS_REPORT, icon: Icon.Analysis, component: StatisticReport },
    { title: MENU_ITEMS.RING_TONE, icon: Icon.RingTone, component: ManageSounds },
  ];

  const handleMenuBtnClick = (title) => {
    setSelectedPanel(title);
  };

  const renderPanelsComponents = () =>
    menuItems.map((item) => {
      const Component = item.component;
      return (
        selectedPanel === item.title && <Component title={item.title} key={item.title}></Component>
      );
    });

  return (
    <Container isMenuVisible={isMenuVisible}>
      <MenuBar
        menuItems={menuItems}
        activeItem={selectedPanel}
        handleMenuBtnClick={handleMenuBtnClick}
      ></MenuBar>
      {isMenuVisible && (
        <MenuContainer title={selectedPanel}>{renderPanelsComponents()}</MenuContainer>
      )}
    </Container>
  );
};

export default Menu;
