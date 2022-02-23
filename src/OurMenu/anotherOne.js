import menu from "./menuData";
import React, { useEffect, useState } from "react";
export const useCategory = (menu) => {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [shakes, setShakes] = useState([]);

  const getBreakfast = async () => {
    const newMenu = await menu.filter((newOfBreakfast) => {
      return newOfBreakfast.category == "breakfast";
    });
    setBreakfast(newMenu);
  };
  const getLunch = async () => {
    const newMenu = await menu.filter((newOfBreakfast) => {
      return newOfBreakfast.category == "lunch";
    });
    setLunch(newMenu);
  };
  const getShakes = async () => {
    const newMenu = await menu.filter((newOfBreakfast) => {
      return newOfBreakfast.category == "shakes";
    });
    setShakes(newMenu);
  };
  useEffect(() => {
    getBreakfast();
    getLunch();
    getShakes();
  }, [menu]);
  return { breakfast, lunch, shakes };
};
