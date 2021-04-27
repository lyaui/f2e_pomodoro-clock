import React, { createContext, useState, useContext } from 'react';

const isMenuVisibleContext = createContext({ isMenuVisible: true, handleMenuVisible: () => {} });

export const IsMenuVisibleProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const contextValue = {
    isMenuVisible,
    handleMenuVisible() {
      setIsMenuVisible((preIsMenuVisible) => !preIsMenuVisible);
    },
  };

  return (
    <isMenuVisibleContext.Provider value={contextValue}>{children}</isMenuVisibleContext.Provider>
  );
};

export const useIsMenuVisibleVal = () => useContext(isMenuVisibleContext);
