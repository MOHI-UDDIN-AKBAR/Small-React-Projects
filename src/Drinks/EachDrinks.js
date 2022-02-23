import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useGlobalContext } from "./contextApi";
const EachDrinks = () => {
  const { singleDrink, setSingleDrink, loadingForSingleDrink } =
    useGlobalContext();
  console.log(singleDrink);
  // useEffect(() => {
  //   if (window.location.reload() == true) {
  //     window.assign("/");
  //   }
  // }, []);
  // if (window.location.reload === true) {
  //   window.location.pathname = "/";
  // }
  if (!singleDrink) {
    // window.history.push("/");
    console.log("noooo");
    window.location.href = "/";
  }
  return (
    <>
      {loadingForSingleDrink ? (
        "loading....."
      ) : (
        <div className="singleDrink">
          <div className="details">
            <Link to={"/"}>
              <button>Back Home</button>
            </Link>
            {singleDrink.map((drink) => {
              const {
                idDrink,
                strGlass,
                strDrinkThumb,
                strAlcoholic,
                strInstructions,
                strCategory,
              } = drink;
              return (
                <div className="information" key={idDrink}>
                  <img src={strDrinkThumb} alt={strGlass} />
                  <div className="info">
                    <div>
                      <span className="same">Name</span>
                      <span className="normal">{strGlass}</span>
                    </div>
                    <div>
                      <span className="same">Category</span>
                      <span className="normal">{strCategory}</span>
                    </div>
                    <div>
                      <span className="same">Alcoholic</span>
                      <span className="normal">{strAlcoholic}</span>
                    </div>
                    <div>
                      <span className="same">Instruction</span>
                      <span className="normal">{strInstructions}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default EachDrinks;
