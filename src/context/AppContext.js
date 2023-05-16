import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState('');

  const contextValues = {state,setState};

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);