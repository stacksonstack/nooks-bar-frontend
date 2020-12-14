import React, {Component} from 'react'
import BeerPreview from '../Components/BeerPreview'
import FullBeerInfo from '../Components/FullBeerInfo'
class BeersContainer extends Component{
    
    renderBeerPreview=()=>{
    return this.props.beers.map((beer)=>   <BeerPreview key={beer.id} beer={beer} addBeer={this.props.addBeer}/>)
    }
    renderBeerFullInfo=()=>{
        return this.props.beers.map((beer)=> <FullBeerInfo  beer={beer}/> )
        }
    
    render(){
        return(
            <div>
                {this.renderBeerPreview()}    
                {this.renderBeerFullInfo()}        
            </div>
        )
    }
}

export default BeersContainer;