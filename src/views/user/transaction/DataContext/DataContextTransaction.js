// DataContextTransaction.js
import React, { createContext, useContext, useState } from 'react';

const DataContextTransaction = createContext();

export const DataProviderTransaction = ({ children }) => {
  const [cachedTransactions, setCachedTransactions] = useState({});
  
  const updateCachedTransactions = (page, data) => {
    setCachedTransactions(prevCache => ({
      ...prevCache,
      [page]: data,
    }));
  };

  return (
    <DataContextTransaction.Provider value={{ cachedTransactions, updateCachedTransactions }}>
      {children}
    </DataContextTransaction.Provider>
  );
};

export const useDataTransaction = () => useContext(DataContextTransaction);