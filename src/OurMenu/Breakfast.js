import React, { useState, useEffect } from "react";
import menu from "./menuData";
import { useCategory } from "./anotherOne";
const Breakfast = () => {
  const { breakfast } = useCategory(menu);
  useEffect(() => {
    console.log(breakfast);
  });
  return (
    <>
      <div className="all">
        {breakfast.map((eachMenu) => {
          const { category, desc, id, img, price, title } = eachMenu;
          //   console.log(img);

          return (
            <div className="eachMenu" key={id}>
              <div className="image">
                <img src={img} alt={title} />
              </div>
              <div className="info">
                <div className="namePrice">
                  <h3>{title}</h3>
                  <span>$ {price}</span>
                </div>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Breakfast;
