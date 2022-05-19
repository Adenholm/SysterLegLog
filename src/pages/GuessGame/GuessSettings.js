import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DiscreteSlider from "./NumberCardsButton";
import Checkbox from "../../Components/Checkbox";
import { Categories } from "../../Components/Categories";

//array that doesn't include the 'Alla kategorier' category
var onlyCategories = Categories.slice(1);

function GuessSettings() {
  const [numberOfCards, setNumberOfCards] = useState(4);
  const navigate = useNavigate();

  //array with individual states for each checkbox to keep track of which checkboxes are checked or not
  const states = [];
  //array with state for only the 'Alla kategorier'-checkbox (actually just a single value)
  const allCategoryState = [];
  //var that keeps track on where each category has its state
  var i = -1;
  //function for creating the 'Alla kategorier'-checkbox
  function createAllCatCheckbox(cardData) {
    return (
      <Checkbox
        id="checkbox"
        label={cardData.name}
        index={0}
        getState={(state, index) => (allCategoryState[index] = state)}
      />
    );
  }
  //function for creating remaining checkboxes
  function createCheckbox(cardData) {
    i++;
    return (
      <Checkbox
        id="checkbox"
        label={cardData.name}
        index={i}
        getState={(state, index) => (states[index] = state)}
      />
    );
  }

  const toGuessPage = () => {
    navigate("/GuessPage", {
      state: {
        categoryStates: states,
        allCategories: allCategoryState[0],
        numCards: numberOfCards,
      },
    });
  };
  return (
    <div className="settings">
      <button className="btnSettings">
        <Link to={-1}>Tillbaka</Link>
      </button>
      {createAllCatCheckbox(Categories[0])}
      {onlyCategories.map(createCheckbox)}

      <li>
        <DiscreteSlider onChangeHandler={setNumberOfCards} />
      </li>
      <li>
        <button className="btnSettings" onClick={() => toGuessPage()}>
          Spela
        </button>
      </li>
      <button
        className="btnSettings"
        onClick={() => console.log(numberOfCards)}
      >
        Debug
      </button>
    </div>
  );
}

export default GuessSettings;
