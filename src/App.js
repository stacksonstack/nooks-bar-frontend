import { Component } from "react";
import "./App.css";
import BeersContainer from "./Containers/BeersContainer";
import BeerForm from "./Components/BeerForm";
import Search from './Components/Search'

class App extends Component {
  state = {
    beers: [],
    userBeers: [],
    currentUserId: 1,
    searchValue: 3.0
  };

  async componentDidMount() {
    let response = await fetch("http://localhost:3000/api/v1/beers");
    let beerData = await response.json();
    this.setState({ beers: beerData });
  }


  filteredBeers = () => {
    console.log("beers filtered:",this.state.beers.filter(beer => beer.abv >= this.state.searchValue))
    console.log("Beers", this.state.beers)
    return this.state.beers.filter(beer => beer.abv >= this.state.searchValue)
    
    
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

  searchHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }



  render() {
   
    return (
      
      <div>
        {console.log(this.state.beers)}
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} searchOption={this.state.searchOption}/>
        
        <h1>Beers</h1>
        <BeersContainer
          beers={this.filteredBeers()}
          beersFull={this.state.beers}
          addBeer={this.persistUserBeer}
        />
        <h1>User Beers</h1>
        <BeersContainer beers={this.state.userBeers} beersFull={null} addBeer={null}/>
        <BeerForm addNewBeer={this.addNewBeer} />
      </div>
    );
  }
}

export default App;
