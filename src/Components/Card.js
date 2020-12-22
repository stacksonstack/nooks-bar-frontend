import React from "react";
import PropTypes from 'prop-types'

export default function Card({ solved, disabled, handleClick, id, flipped, height, width, type }) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : " "}`}
      style={{ width, height }}
      onClick={() => disabled ? null : handleClick(id)}
    >
      <div className="flipper">
        <img
          style={{ width, height }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? `/img/${type}.png` : `/img/backImg.jpg`}
          alt="card"
        />
      </div>
    </div>
  );
}


Card.propTypes={
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved : PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
}