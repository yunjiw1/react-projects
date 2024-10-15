import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import Loading from './components/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()
const DEFAULT_SEARCH = 'a'

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState(DEFAULT_SEARCH);

  const fetchDrinks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url + (searchTerm.length == 0 ? DEFAULT_SEARCH : searchTerm));
      const data = await response.json();
      console.log(data.drinks);
      setCocktails(data.drinks);
    } catch (e) {
      setCocktails([]);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])
  
  return (
    <AppContext.Provider value={{loading, cocktails, setSearchTerm}}>
      {children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
