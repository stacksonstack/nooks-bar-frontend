import { Component } from "react";
import "./App.css";
import BeersContainer from "./Containers/BeersContainer";
import BeerForm from "./Components/BeerForm";
import Search from "./Components/Search";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import Welcome from "./Components/Welcome";
import UpdateUser from "./Components/UpdateUser";
import UserInfo from "./Components/UserInfo";
import CardGame from "./Containers/CardGame";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    beers: [],
    userBeers: [],
    currentUserId: null,
    searchValue: 3.0,
    currentUser: [],
    totalLosses: null,
    totalWins: null,
  };

  async componentDidMount() {
    let response = await fetch("http://localhost:3000/api/v1/beers");
    let beerData = await response.json();
    this.setState({ beers: beerData });

    let userResponse = await fetch(
      `http://localhost:3000/api/v1/users/${this.state.currentUserId}`
    );
    let userData = await userResponse.json();
    this.setState({ userBeers: userData.beers });
    this.setState({ currentUser: userData });
    this.setState({ totalWins: userData.wins });
    this.setState({ totalLosses: userData.losses });
  }

  addLike = (beerObj) => {
    fetch(`http://localhost:3000/api/v1/beers/${beerObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        likes: beerObj.likes + 1,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        let beerCopy = this.state.beers;
        let index = beerCopy.findIndex((beer) => beer.id === beerObj.id);
        beerCopy[index] = data;
        this.setState({ beers: beerCopy });
      });
  };

  addDislike = (beerObj) => {
    fetch(`http://localhost:3000/api/v1/beers/${beerObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        dislikes: beerObj.dislikes + 1,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        let beerCopy = this.state.beers;
        let index = beerCopy.findIndex((beer) => beer.id === beerObj.id);
        beerCopy[index] = data;
        this.setState({ beers: beerCopy });
      });
  };

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
      abv,
      pair1,
      pair2,
      pair3,
    } = beerObj;
    const food_array = [pair1, pair2, pair3];
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
        abv,
        food_pairing: food_array,
        likes: 0,
        dislikes: 0
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ beers: [...this.state.beers, data] }, () =>
          this.props.history.push("/beers")
        );
      });
  };

  searchHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeBeer = (beer) => {
    fetch(
      `http://localhost:3000/api/v1/users/${this.state.currentUserId}/user_beers/${beer.id}`,
      {
        method: "DELETE",
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ userBeers: data });
      });
  };

  updateUser = (userObj) => {
    const { name, email, password, age } = userObj;
    console.log("User Object", userObj);

    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({ name, email, password, age }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ currentUser: data }, () =>
          this.props.history.push("/myInfo")
        );
      });
  };

  goBackToBar = () => {
    this.props.history.push("/beers");
  };

  setLoss = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({ losses: this.state.totalLosses + 1 }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ losses: data.losses });
      });
  };

  setWin = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({ wins: this.state.totalWins + 1 }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ wins: data.wins });
      });
  };

  loginSubmitHandler = (email) => {
    fetch(`http://localhost:3000/api/v1/users/`)
      .then((r) => r.json())
      .then((data) => {
        data.forEach((user) => {
          if (email === user.email) {
            this.setState({ currentUserId: user.id });
            this.setState({ userBeers: user.beers });
            this.setState({ currentUser: user });
            this.setState({ totalWins: user.wins });
            this.setState({ totalLosses: user.losses });
            this.props.history.push(`/savedBeers`);
          }
        });
      });
  };
  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div id="background">
        {/* {console.log("User Data", this.state.currentUser)} */}
        <Header />
        <NavBar
          user={this.state.currentUser}
          userId={this.state.currentUserId}
        />
        <Switch>
          <Route
            exact
            path="/beers/new"
            render={() => <BeerForm addNewBeer={this.addNewBeer} />}
          />
          <Route
            exact
            path="/"
            render={() => <Welcome login={this.loginSubmitHandler} />}
          />
          <Route
            path="/user"
            render={() => (
              <UpdateUser
                update={this.updateUser}
                user={this.state.currentUser}
              />
            )}
          />
          <Route
            path="/myInfo"
            render={() => <UserInfo user={this.state.currentUser} />}
          />
          <Route
            exact
            path="/beers"
            render={() => (
              <div id="all-beers">
                <div id="beers-container">
                  <div id="search">
                    <Search
                      searchValue={this.state.searchValue}
                      searchHandler={this.searchHandler}
                      searchOption={this.state.searchOption}
                    />
                  </div>
                  <div id="menu-title">
                    <h1 id="title">Nook's Beer Menu</h1>
                  </div>
                  <div id="menu-beers">
                    <BeersContainer
                      beers={this.filteredBeers()}
                      beersFull={this.state.beers}
                      addBeer={this.persistUserBeer}
                      addLike={this.addLike}
                      addDislike={this.addDislike}
                      user={this.state.currentUserId}
                    />
                  </div>
                </div>
              </div>
            )}
          />
          <Route
            path="/beers/:id"
            render={() => (
              <BeersContainer
                beers={this.filteredBeers()}
                beersFull={this.state.beers}
                addBeer={this.persistUserBeer}
                addLike={this.addLike}
                addDislike={this.addDislike}
                user={this.state.currentUserId}
              />
            )}
          />
          <Route
            path="/savedBeers"
            render={() => (
              <div id="user-beers">
                <div id="user-beers-container">
                  <div id="user-menu-title">
                    <h1 id="title">
                      {`${this.state.currentUser.name}`}'s Curated Beer List
                    </h1>
                  </div>
                  <div id="user-menu-beers">
                    <BeersContainer
                      beers={this.state.userBeers}
                      removeBeer={this.removeBeer}
                      addLike={this.addLike}
                      addDislike={this.addDislike}
                      user={this.state.currentUserId}
                    />
                  </div>
                </div>
              </div>
            )}
          />
          <Route
            path="/cardGame"
            render={() => (
              <CardGame
                user={this.state.currentUserId}
                totalWins={this.state.totalWins}
                totalLosses={this.state.totalLosses}
                goBack={this.goBackToBar}
                setWin={this.setWin}
                setLoss={this.setLoss}
                refreshPage={this.refreshPage}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
