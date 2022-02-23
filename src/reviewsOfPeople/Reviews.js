import React, { useState } from "react";
import reviews from "./dataForReviews";
const Reviews = () => {
  const [people, setPeople] = useState(reviews);
  const [person, setPerson] = useState(people[0]);
  const [next, setNext] = useState(1);
  const [previous, setPrevious] = useState(3);
  const [surprise, setSurprise] = useState(0);

  const previousPerson = () => {
    setPrevious(previous - 1);
    setPerson(people[previous]);
    if (previous == 0) {
      setPrevious(3);
    }
    // console.log(previous);
  };
  const nextPerson = () => {
    setNext(next + 1);
    setPerson(people[next]);
    if (next == 3) {
      setNext(0);
    }
    // console.log(next);
  };
  const surprisePerson = () => {
    const randomPerson = Math.round(Math.random() * (3 - 0) + 0);
    setSurprise(randomPerson);
    setPerson(people[surprise]);
    // console.log(surprise);
  };
  return (
    <>
      <div className="reviews">
        <h1>OUR REVIEWS</h1>
        <div className="mainSection">
          <div className="imagePart">
            <div className="empty"></div>
            <div className="image">
              <img src={person.image} alt={person.name} />
            </div>
            <div className="coma">
              <span>,,</span>
            </div>
          </div>
          <div className="name-profession">
            <h3>{person.name}</h3>
            <h3>{person.job}</h3>
          </div>
          <div className="info">
            <p>{person.text}</p>
          </div>
          <div className="left-right">
            <button type="button" className="left" onClick={previousPerson}>
              <i className="fa-solid fa-caret-left"></i>
            </button>
            <button type="button" className="right" onClick={nextPerson}>
              <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <button type="button" className="surprise" onClick={surprisePerson}>
            Surprise
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
