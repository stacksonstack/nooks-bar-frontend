import React from "react";
import Card from "./Card";


export default function Board({ solved, disabled, dimension, cards, flipped, handleClick }) {
  return (
    <>
      {cards.map((card) => (
        <Card
          cardName={card.cardName}
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

