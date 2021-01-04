import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Signup from "./Signup";
import Login from "./Login";
function Welcome(props) {
  return (
    <div class="container">
      <div class="bar">
        <img alt="Bar Glass Rack" src={`/img/barTop2.png`} id="bar-top" />
        <div class="frame-container">
          <div class="frame" id="welcome-frame">
            <div id="welcome-grid">
            <div id="welcome-title">
              <h1 id="title">Welcome!</h1>
            </div>
            <div id="welcome-text">
              <p>Are you tired of having the same old beer for lunch or dinner? Would you like to impress your friends 
                with a cool new beer option the next time you go to a party? Then Nook's Bar is the perfect place for you!
                Browse through our large collection of beers provided by PunkAPI. As a member your can save beers to your own curated list to come back
                to at anytime or submit a beer to our menu we don't currently have! As a bonus we have a Mix & Match Card game to test your memory skills for fun!
                
              </p><p>
                Nook's Bar opened in 2020 and will expand in the coming months! 
                </p>
            </div>
            <div id="welcome-image">
              <img alt="Timmy & Tommy" src={`/img/timmy.png`} id="timmy" />
            </div>
            <div id="welcome-btn">
              <Login />
            
          
              <Signup />
              </div>
            </div>
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

export default Welcome;
