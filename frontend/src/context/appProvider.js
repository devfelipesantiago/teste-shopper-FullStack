import { shape } from 'prop-types'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './appContext';
import { getAllproducts } from '../api';

export function AppProvider({ children }) {
  const [ products, setProducts ] = useState({});

  useEffect(() => {
    getAllproducts()
  }, [])

  const context = {
    products
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: shape().isRequired,
};

export const useAppContext = () => useContext(AppProvider);