import React, { useState, useEffect } from "react";
import "./GuessCard.css";

const Card = (props) => {
  // This is so that the green frame and confetti disappears next round
  useEffect(() => {
    console.log(props.nextCards, "has changed");
    changeStyle("var(--bg-color)");
    document.getElementById("confetti").setAttribute("class", "cardPhoto");
  }, [props.nextCards]);

  const changeStyle = (color) => {
    if (props.isCorrect) {
      document.getElementById(props.id).style.borderColor = color;
      document
        .getElementById("confetti")
        .setAttribute("class", "showclass"); /**change confetti className */
    }
  };
  return (
    <div className="guessCard" onClick={() => changeStyle("green")}>
      <img src={props.img} className="guessCardPhoto" id={props.id} />
      {props.isCorrect /**Adds confetti to correct card */ && (
        <img src="/images/confetti.gif" className="cardPhoto" id={"confetti"} />
      )}
    </div>
  );
};
export default Card;
