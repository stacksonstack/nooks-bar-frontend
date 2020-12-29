import React, { Component } from "react";

class FullBeerInfo extends Component {
  render() {
    return (
      <div class="container">
      <div class="bar">
        <img alt="Bar Glass Rack" src={`/img/barTop2.png`} id="bar-top"/>
        <div class="frame-container">
        <div class="frame" id="full-info-frame">
        {this.props.beer ? (<><h1 id="beer-title">{this.props.beer.name}</h1>
        <p>{this.props.beer.tag_line}</p>
        <img src={this.props.beer.image_url} alt={this.props.beer.name} />
        <p>{this.props.beer.description}</p>
        <p>{this.props.beer.abv}</p>
        <p>{this.props.beer.food_pairings}</p>
        <button id="btn" onClick={()=>this.props.addDislike(this.props.beer)}>Dislikes: {this.props.beer.dislikes}</button>
        <button id="btn" onClick={()=>this.props.addLike(this.props.beer)}>Likes: {this.props.beer.likes}</button></>) : <h2>Loading...</h2>}
        </div>
        </div>
        <img alt="Bar Table And Stool" src={`/img/barStool2.png`} id="bar-stool"/>
      </div>
      </div>
    );
  }
}

export default FullBeerInfo;
