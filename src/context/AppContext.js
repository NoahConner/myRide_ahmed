import React, {createContext, useContext, useState} from 'react';
const AppContext = createContext();
export const AppProvider = ({children}) => {
  const [state, setState] = useState('');
  const [loader, setLoader] = useState('');

  const contextValues = {state, setState, loader, setLoader};

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
