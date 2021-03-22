import React from "react";

export default function Card({ solved, disabled, handleClick, id, flipped, height, width, type }) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : " "}`}
      style={{ width, height }}
      onClick={() => disabled ? null : handleClick(id)}
    >
      <div className="flipper">
        <img
          id=""
          style={{ width, height }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? `/img/${type}.png` : `/img/backImg.jpg`}
          alt="card"
        />
      </div>
    </div>
  );
}
