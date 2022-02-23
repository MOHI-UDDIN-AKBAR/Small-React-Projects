import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./contextApi";
import { useGlobalContext } from "./contextApi";
import Drinks from "./Drinks";
export const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Home = () => {
  const [drinkName, setDrinkName] = useState("");
  const {
    drinks,
    loading,
    singleDrink,
    setSingleDrink,
    setLoadingForSingleDrink,
    setDrinks,
    tempDrinks,
    setTempDrink,
  } = useGlobalContext();
  const showDetails = (id) => {
    const newDrinks = drinks.filter((drink) => {
      return drink.idDrink === id;
    });
    console.log(newDrinks);
    if (newDrinks) {
      setSingleDrink(newDrinks);
      setLoadingForSingleDrink(false);
    }
  };
  const matchDrinks = () => {
    console.log(drinkName);
    if (drinkName) {
      const uniqueDrinks = drinks.filter((drink) => {
        return drink.strDrink.includes(drinkName);
      });
      console.log(uniqueDrinks);
      if (uniqueDrinks) {
        setTempDrink(uniqueDrinks);
      } else {
        setTempDrink(Drinks);
      }
    }
    if (drinkName.length == 0) {
      setTempDrink(drinks);
    }
  };
  //   console.log(drinks[0]);
  useEffect(() => {
    matchDrinks();
  }, [drinkName]);
  return (
    <>
      {loading ? (
        "Loading....."
      ) : (
        <main>
          <div className="searchArea">
            <label htmlFor="food">Search Your Favorite Drinks</label>
            <input
              type="text"
              id="food"
              value={drinkName}
              onChange={(e) => setDrinkName(e.target.value)}
            />
          </div>
          <div className="mainSection">
            <h1>All You Want</h1>
            <div className="listOfDrinks">
              {tempDrinks.map((drink) => {
                const {
                  idDrink,
                  strGlass,
                  strDrinkThumb,
                  strCategory,
                  strAlcoholic,
                  strDrink,
                } = drink;
                return (
                  <div className="eachDrink" key={idDrink}>
                    <img src={strDrinkThumb} alt={strDrink} />

                    <span className="title">{strDrink}</span>
                    <span className="name">{strGlass}</span>
                    <span className="type">{strCategory}</span>
                    <Link className="Link" to={"/eachDrink"}>
                      <button onClick={() => showDetails(idDrink)}>
                        Description
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
