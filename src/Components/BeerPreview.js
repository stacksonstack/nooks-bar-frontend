import React, { Component } from "react";

class BeerPreview extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.beer.name}</h4>
        <img src={this.props.beer.image_url} alt={this.props.beer.name} />
        <p>{this.props.beer.likes}</p>
        <p>{this.props.beer.dislikes}</p>
        <button onClick={() => this.props.addBeer(this.props.beer)}>Add To My List</button>
      </div>
    );
  }
}

export default BeerPreview;
