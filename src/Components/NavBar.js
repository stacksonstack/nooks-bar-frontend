import {NavLink} from 'react-router-dom'

function NavBar(props) {
    return (
      <div >
        <ul>
            <li>Welcome Guest</li>
            <NavLink to="/login">
            <li>Login</li>
            </NavLink>
            <NavLink to="/signup">
            <li>Sign Up</li>
            </NavLink>
            <li>Card Game</li>
            <NavLink to="/savedBeers">
            <li>Saved Beers</li>
            </NavLink>
            <li>Log Out</li>
            <NavLink to="/beers">
            <li>Beers</li>
            </NavLink>
        </ul>
      </div>
    );
  }
  
  export default NavBar;