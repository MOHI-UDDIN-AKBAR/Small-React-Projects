import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
const url = "https://course-api.com/react-tours-project";
const OurTour = () => {
  const { isLoading, setLoading, tours, setTours } = useFetch(url);
  const [refresh, setRefresh] = useState("");
  const [readMore, setReadMore] = useState(false);
  const removeTour = (id) => {
    const newTourList = tours.filter((tour) => {
      return tour.id !== id;
    });
    if (newTourList.length == 0) {
      setRefresh("Refresh");
      console.log("hello");
    }
    setTours(newTourList);
  };
  const refreshAll = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="tourApp">
        <h1>OUR TOURS</h1>
        <div className="listOfTour">
          {isLoading ? (
            "Loading..."
          ) : refresh ? (
            <button type="button" className="refresh" onClick={refreshAll}>
              {refresh}
            </button>
          ) : (
            tours.map((tour) => {
              const { id, name, info, image, price } = tour;
              return (
                <div className="tour" key={id}>
                  <img src={image} alt={name} />
                  <div className="nameAndPrice">
                    <h3>{name}</h3>
                    <span>$ {price}</span>
                  </div>
                  <p>
                    {readMore ? info : `${info.substring(0, 220)}.... `}
                    <span
                      type="button"
                      onClick={() => setReadMore(!readMore)}
                      style={{
                        color: "blue",
                        backgroundColor: "white",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    >
                      {readMore ? "show less" : "read more"}
                    </span>
                  </p>
                  <button type="button" onClick={() => removeTour(id)}>
                    Not Interested
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default OurTour;
