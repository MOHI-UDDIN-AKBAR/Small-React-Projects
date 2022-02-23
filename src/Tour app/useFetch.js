import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const getTour = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setTours(data);
  };

  useEffect(() => {
    getTour();
  }, [url]);
  return { isLoading, setLoading, tours, setTours };
};
