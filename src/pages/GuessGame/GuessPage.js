import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./GuessCard";
import confetti from "../../Components/icons/confetti.gif";
import rightArrow from "../../Components/icons/right-arrow.png";
import leftArrow from "../../Components/icons/left-arrow.png";
import Sound from "react-sound";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./GuessPage.css";

function GuessPage(props) {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [correctCard, setCorrectCard] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(true);
  const numberOfCards = location.state.numCards;

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    //send get request to cards/all
    axios
      .get("http://localhost:4001/cards/all")
      .then((response) => {
        let randomCards = response.data
          .sort(() => Math.random() - Math.random())
          .slice(0, numberOfCards);
        let choosenCard =
          randomCards[Math.floor(Math.random() * randomCards.length)];
        choosenCard.isCorrect = true;

        console.log(randomCards);
        setCards(randomCards);
        console.log(choosenCard);
        setCorrectCard(choosenCard);
        setIsPlaying(true);
        setIsLoaded(true);
      })
      .catch((error) => console.error("Couldnt retrieve cards: " + error));
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button className="btnBack">
        <img src={leftArrow} className="btnBackImage" />
        <Link to={-1} className="btnBackLink">
          Tillbaka till startsidan
        </Link>
      </button>

      <div className="allCards">
        {createCards(cards)}
        <Sound
          url={correctCard ? correctCard.sound : ""}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={0}
        />
        <img src={rightArrow} onClick={fetchCards} className="btnNext" />
        <button className="btnReplay" onClick={() => setIsPlaying(!isPlaying)}>
          Lyssna igen
        </button>

        <img src={confetti} className="confetti" />
      </div>
    </div>
  );
}

function createCards(images) {
  return images.map((cardData) => {
    return <Card img={cardData.pic} isCorrect={cardData.isCorrect} />;
  });
}

export default GuessPage;
