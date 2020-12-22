import React, { useState, useEffect } from "react";
import Board from "../Components/Board";

function CardGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []); //with the [], this will only get called the first time
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    return () => window.removeEventListener("resize", resizeListener);
  });
  useEffect(() => {
    preloadImages();
  }, cards);
  

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  const preloadImages = () => {
    cards.map((card) => {
      const src = `/img/${card.type}.png`;
      new Image().src = src;
    });
  };
  const shuffle = (array) => {
    const _array = array.slice(0);
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = _array[i];
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp;
    }
    return _array;
  };
  const initializeDeck = () => {
    let id = 0;
    const cards = [
      "ketchup",
      "gloria",
      "celeste",
      "apollo",
      "stitches",
      "diana",
      "tiffany",
      "marina",
    ].reduce((acc, type) => {
      acc.push({
        id: id++,
        type,
      });
      acc.push({
        id: id++,
        type,
      });
      return acc;
    }, []);
    return shuffle(cards);
  };
  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) {
        setDisabled(false);
        return;
      }
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const sameCardClicked = (id) => {
    flipped.includes(id);
  };

  return (
    <div>
      <h2>Nook's Mix & Match Game</h2>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        dimension={dimension}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
}

export default CardGame;
