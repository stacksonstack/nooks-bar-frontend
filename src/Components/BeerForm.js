import React, { Component } from "react";

class BeerForm extends Component {
  state = {
    name: "",
    tag_line: "",
    description: "",
    image_url: "",
    food_pairing: [],
    pair1: "",
    pair2: "",
    pair3: "",
    abv: null,
  };

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  localSubmitHandler = (event) => {
    event.preventDefault();
    this.handleFoodPairings(event);
    console.log("before", this.state);
    this.props.addNewBeer(this.state);
    console.log("after", this.state);
  };

  handleFoodPairings = (event) => {
    this.setState({
      food_pairing: [
        ...this.state.food_pairing,
        this.state.pair1,
        this.state.pair2,
        this.state.pair3,
      ],
    });
  };

  render() {
    return (
      <div class="container">
        <div class="bar">
          <img alt="Bar Glass Rack" src={`/img/barTop2.png`} id="bar-top" />
          <div class="frame-container">
            <div class="frame">
              <form onSubmit={this.localSubmitHandler}>
                <label>Name</label><br />
                <input
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <label>Description</label><br />
                <input
                  type="text"
                  value={this.state.description}
                  name="description"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <label>Tag Line</label><br />
                <input
                  type="text"
                  value={this.state.tag_line}
                  name="tag_line"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <label>Image URL</label><br />
                <input
                  type="text"
                  value={this.state.image_url}
                  name="image_url"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <label>Alcohol By Volume</label><br />
                <input
                  type="number"
                  name="abv"
                  min="3.0"
                  max="13.0"
                  step=".1"
                  onChange={this.handleChanges}
                  value={this.state.abv}
                ></input>
                <br />
                <br />
                <label>Food Pairing 1</label><br />
                <input
                  type="text"
                  value={this.state.pair1}
                  name="pair1"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <label>Food Pairing 2</label><br />
                <input
                  type="text"
                  value={this.state.pair2}
                  name="pair2"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <label>Food Pairing 3</label><br />
                <input
                  type="text"
                  value={this.state.pair3}
                  name="pair3"
                  onChange={this.handleChanges}
                />
                <br />
                <br />
                <button id="btn">Submit</button>
              </form>
            </div>
          </div>
          <img
            alt="Bar Table And Stool"
            src={`/img/barStool2.png`}
            id="bar-stool"
          />
        </div>
      </div>
    );
  }
}

export default BeerForm;
