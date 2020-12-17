import React, { Component } from "react";

class FullBeerInfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.beer.name}</h1>
        <p>{this.props.beer.tag_line}</p>
        <img src={this.props.beer.image_url} alt={this.props.beer.name} />
        <p>{this.props.beer.description}</p>
        <p>{this.props.beer.yeast}</p>
        <p>{this.props.beer.abv}</p>
        <p>{this.props.beer.food_pairings}</p>
        <button>{this.props.beer.dislikes}</button>
        <button>{this.props.beer.likes}</button>
      </div>
    );
  }
}

export default FullBeerInfo;
