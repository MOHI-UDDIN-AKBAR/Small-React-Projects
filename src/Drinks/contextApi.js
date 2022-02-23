import React, { useContext, useEffect, useState } from "react";
import { url } from "./Home";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleDrink, setSingleDrink] = useState();
  const [loadingForSingleDrink, setLoadingForSingleDrink] = useState(true);
  const [tempDrinks, setTempDrink] = useState([]);

  const getDrinks = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setDrinks(data.drinks);
    setTempDrink(data.drinks);
    setLoading(false);
  };
  useEffect(() => {
    getDrinks(url);
  }, [url]);
  return (
    <AppContext.Provider
      value={{
        drinks,
        setDrinks,
        loading,
        singleDrink,
        setSingleDrink,
        setLoading,
        loadingForSingleDrink,
        setLoadingForSingleDrink,
        tempDrinks,
        setTempDrink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
