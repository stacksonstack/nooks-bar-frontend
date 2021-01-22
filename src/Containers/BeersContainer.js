import React, { Component } from "react";
import BeerPreview from "../Components/BeerPreview";
import FullBeerInfo from "../Components/FullBeerInfo";
import { Route, Switch } from "react-router-dom";
class BeersContainer extends Component {
  renderBeerPreview = () => {
    return this.props.beers ?  this.props.beers.map((beer) => (
        <BeerPreview key={beer.id} beer={beer} addBeer={this.props.addBeer} removeBeer={this.props.removeBeer} addLike={this.props.addLike} addDislike={this.props.addDislike}/>
      )) : <h1>Loading..</h1> 
  };

  render() {
    return (
      <>
       {this.props.beers.length === 0 ? (
          this.props.removeBeer ? <h1>Add Beers To View</h1>: <h1>Loading...</h1>
        ) : (
          <>
            <Switch>
           
            <Route
                path="/savedBeers"
                 render={() => {
                  return this.renderBeerPreview();
                }}
              />
              
              <Route
                exact path="/beers"
                 render={() => {
                  return this.renderBeerPreview()
                  
                }}
              />
               <Route
                 path="/beers/:id"
                render={({ match }) => {
                  let id = parseInt(match.params.id);
                  let foundBeer = this.props.beers.find(
                    (beer) => beer.id === id
                  )
                  return <FullBeerInfo beer={foundBeer} addLike={this.props.addLike} addDislike={this.props.addDislike}/>;
                }}
              />
              
             
            </Switch>
          </>
        )} 
        
      </>
    );
  }
}

export default BeersContainer;
