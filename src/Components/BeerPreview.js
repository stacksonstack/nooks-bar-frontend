import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class BeerPreview extends Component {
  beerButton = () => {
    return this.props.addBeer ? (
      <button id="btn" onClick={() => this.props.addBeer(this.props.beer)}>
        Add To My List
      </button>
    ) : (
      <button id="btn" onClick={() => this.props.removeBeer(this.props.beer)}>
        Remove
      </button>
    );
  };

  render() {
    return (
      <div id="beer-preview">
        <NavLink to={`/beers/${this.props.beer.id}`}>
          <h4>{this.props.beer.name}</h4>
        </NavLink>
        <img src={this.props.beer.image_url} alt={this.props.beer.name} />
        <p>{this.props.beer.likes} Likes</p>
        <p>{this.props.beer.dislikes} Dislikes</p>
        <div>{this.beerButton()}</div>
      </div>
    );
  }
}

export default BeerPreview;
