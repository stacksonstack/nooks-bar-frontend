import React, { useState, useEffect } from "react";
import Board from "../Components/Board";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function CardGame(props) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(80);
  const [checkWin, setCheckWin] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []); //with the [], this will only get called the first time
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    return () => window.removeEventListener("resize", resizeListener); // resizes the board depending on the width + height of viewport
  });
  useEffect(() => {
    preloadImages();
  }, [cards]);

  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    
  //   gameOver();
    
  // }, [counter]);

  var sampleVar;
  

  useEffect(() => {
    if(counter > 0){
    sampleVar =  setTimeout(() => setCounter(counter - 1), 1000);}
    
    gameOver();
    
  }, [counter]);


const sampleStopFunction=()=>{
  clearTimeout(sampleVar);
  setCheckWin(true) 
  setCounter(0);
}


  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth, // the viewport's width
        document.documentElement.clientHeight // the viewport's height
      )
    );
  };

  const preloadImages = () => {
    cards.map((card) => {
      const src = `/img/${card.type}.png`;
      new Image().src = src;
      // The Image() constructor creates a new HTMLImageElement instance. It is functionally equivalent to document.createElement('img')
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

 
  const gameOver = () => {
    if(solved.length >= 15) {
      <h1>YOU WON</h1>;
      sampleStopFunction();
      props.setWin();
      
      console.log("You won!");
      
    }if(counter === 0 && solved.length < 15) {
      <h1>Game Over</h1>;
      props.setLoss();

      console.log("GAME OVER");  
      
    }
  };

  return (
    <div id="card-game">
      {console.log("user", props.user)}
      <h1 id="title">Nook's Mix & Match Game</h1>

      {counter === 0  ? (
        <>
          {/* <!-- Button trigger modal --> */}
          <div id="result-btn">
            <button
              id="btn"
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              
            >
              See Results
            </button>
          </div>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">
                    {solved.length >= 15
                      ? "You Won!"
                      : "Oops! Better Luck Next Time!"}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {checkWin === false ? (<> <p>Wins: {props.totalWins } </p> <p>Losses: {props.totalLosses + 1} </p></>) : ( <> <p>Wins: {props.totalWins + 1} </p> <p>Losses: {props.totalLosses} </p></> )}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => props.goBack()}
                  >
                    Go Back To Bar
                  </button>
                  <button type="button" class="btn btn-primary">
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {counter === 1 ? (
            <h1 id="title">Time Left: {counter} second </h1>
          ) : (
            <h1>Time Left: {counter} seconds </h1>
          )}
          <div id="board">
            <Board
              cards={cards}
              flipped={flipped}
              handleClick={handleClick}
              dimension={dimension}
              disabled={disabled}
              solved={solved}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CardGame;
