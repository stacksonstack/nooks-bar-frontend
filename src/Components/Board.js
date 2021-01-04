import React from "react";
import Card from "./Card";


export default function Board({ solved, disabled, dimension, cards, flipped, handleClick }) {
  return (
    <>
      {cards.map((card) => (
        <Card
        type={card.type}
          id={card.id}
          key={card.id}
          width={dimension / 4}
          height={dimension / 3.5}
          flipped={flipped.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
          solved={solved.includes(card.id)}
        />
      ))}
    </>
  );
}

// Board.propTypes ={
//     disabled: PropTypes.bool.isRequired,
//     dimension: PropTypes.number.isRequired,
//     cards: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
//     flipped: PropTypes.arrayOf(PropTypes.number.isRequired),
//     solved: PropTypes.arrayOf(PropTypes.number.isRequired),
//     handleClick: PropTypes.func.isRequired
// }
