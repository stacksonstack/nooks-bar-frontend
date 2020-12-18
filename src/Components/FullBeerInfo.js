import React, { Component } from "react";

class FullBeerInfo extends Component {
  render() {
    return (
      <div>
        {this.props.beer ? (<><h1>{this.props.beer.name}</h1>
        <p>{this.props.beer.tag_line}</p>
        <img src={this.props.beer.image_url} alt={this.props.beer.name} />
        <p>{this.props.beer.description}</p>
        <p>{this.props.beer.yeast}</p>
        <p>{this.props.beer.abv}</p>
        <p>{this.props.beer.food_pairings}</p>
        <button onClick={()=>this.props.addDislike(this.props.beer)}>Dislikes: {this.props.beer.dislikes}</button>
        <button onClick={()=>this.props.addLike(this.props.beer)}>Likes: {this.props.beer.likes}</button></>) : <h2>Loading...</h2>}
        
      </div>
    );
  }
}

export default FullBeerInfo;
