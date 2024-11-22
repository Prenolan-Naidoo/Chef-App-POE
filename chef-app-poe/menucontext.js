import React, { createContext, useContext, useState } from 'react';

// Create the context for managing menu items
const MenuContext = createContext();

// Create the provider component
export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]); // State for menu items

  // Function to add a menu item
  const addMenuItem = (item) => {
    setMenu((prevMenu) => [...prevMenu, item]);
  };

  // Function to remove a menu item
  const removeMenuItem = (id) => {
    setMenu((prevMenu) => prevMenu.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, removeMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

// Hook to access the menu context
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
