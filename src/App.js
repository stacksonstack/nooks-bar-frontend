import { Component } from "react";
import "./App.css";
import BeersContainer from "./Containers/BeersContainer";
import BeerForm from "./Components/BeerForm";
import Search from "./Components/Search";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
class App extends Component {
  state = {
    beers: [],
    userBeers: [],
    currentUserId: 1,
    searchValue: 3.0,
  };

  async componentDidMount() {
    let response = await fetch("http://localhost:3000/api/v1/beers");
    let beerData = await response.json();
    this.setState({ beers: beerData });

    let userResponse = await fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`);
    let userList = await userResponse.json();
    this.setState({ userBeers: userList.beers });
    console.log(userList)
  }

  filteredBeers = () => {
    return this.state.beers.filter(
      (beer) => beer.abv >= this.state.searchValue
    );
  };

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
      .then((data) => {
        this.setState({ userBeers: [...this.state.userBeers, beer] });
        console.log("new beer added");
        console.log("beer being added", beer);
      });
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
        console.log("Data:", data);
        this.setState({ beers: [...this.state.beers, data] });
      });
  };

  searchHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeBeer = (beer) => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/user_beers/${beer.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ userBeers: data });
      });
  }


  render() {
    return (
      <div>
        {console.log("User Beers", this.state.userBeers)}
        <Header />
        <NavBar />
        <Switch>
          <Route path="/welcome" render={() => <Welcome />} />
          <Route
            path="/beers"
            render={() => (
              <>
                <h1>Beers</h1>
                <Search
                  searchValue={this.state.searchValue}
                  searchHandler={this.searchHandler}
                  searchOption={this.state.searchOption}
                />
                <BeersContainer
                  beers={this.filteredBeers()}
                  beersFull={this.state.beers}
                  addBeer={this.persistUserBeer}
                  searchValue={this.state.searchValue}
                  searchHandler={this.searchHandler}
                  searchOption={this.state.searchOption}
                />
              </>
            )}
          />
          <Route
            path="/savedBeers"
            render={() => (
              <>
                <h1>User Beers</h1>
                <BeersContainer
                  beers={this.state.userBeers}
                  removeBeer={this.removeBeer}
                />
              </>
            )}
          />
          <Route
            path="/beers/new"
            exact
            render={() => <BeerForm addNewBeer={this.addNewBeer} />}
          />
          <Route path="/signup" exact render={() => <Signup />} />
          <Route path="/login" exact render={() => <Login />} />
        </Switch>
      </div>
    );
  }
}

export default App;
