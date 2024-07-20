import React, { createContext, useContext, useState } from 'react';

export const SharedVariableContext = createContext();

export const SharedVariableProvider = ({ children }) => {
  const [sharedVariable, setSharedVariable] = useState('initial value');

  return (
    <SharedVariableContext.Provider
      value={{ sharedVariable, setSharedVariable }}
    >
      {children}
    </SharedVariableContext.Provider>
  );
};

export const useSharedVariable = () => useContext(SharedVariableContext);
