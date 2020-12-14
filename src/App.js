import { Component } from "react";
import "./App.css";
import BeersContainer from "./Containers/BeersContainer";
import BeerForm from "./Components/BeerForm";
class App extends Component {
  state = {
    beers: [],
    userBeers: [],
    currentUserId: 1,
  };

  async componentDidMount() {
    let response = await fetch("http://localhost:3000/api/v1/beers");
    let beerData = await response.json();
    this.setState({ beers: beerData });
    console.log(this.state.beers);
  }

  async fetchUserList() {
    let response = await fetch(
      `http://localhost:3000/api/v1/user_beers/${this.state.currentUserId}`
    );
    let userList = await response.json();
    this.setState({ userBeers: userList });
  }

  persistUserBeer = (beer) => {
    fetch("http://localhost:3000/api/v1/user_beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.currentUserId,
        beer_id: beer.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({ userBeers: [...this.state.userBeers, beer] })
      );
  };

  addNewBeer = (beerObj) => {
    const {
      name,
      tag_line,
      description,
      image_url,
      food_pairing,
      yeast,
      abv,
    } = beerObj;

    fetch("http://localhost:3000/api/v1/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        name,
        tag_line,
        description,
        image_url,
        food_pairing,
        yeast,
        abv,
        likes: 0,
        dislikes: 0,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Data:",data);
        this.setState({ beers: [...this.state.beers, data] });
      });
  };

  render() {
    return (
      <div>
        <BeerForm addNewBeer={this.addNewBeer} />
        <h1>User Beers</h1>
        <BeersContainer beers={this.state.userBeers} />
        <h1>Beers</h1>
        <BeersContainer
          beers={this.state.beers}
          addBeer={this.persistUserBeer}
        />
      </div>
    );
  }
}

export default App;
