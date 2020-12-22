import {NavLink} from 'react-router-dom'

function NavBar(props) {
    return (
      <div >
        <ul>
            <li>Welcome Guest</li>
            <NavLink to="/login">
            <li>Login</li>
            </NavLink>
            <li>Card Game</li>
            <NavLink to="/savedBeers">
            <li>Saved Beers</li>
            </NavLink>
            <li>Log Out</li>
            <NavLink to="/beers">
            <li>Beers</li>
            </NavLink>
            <NavLink to="/beers/new" >
                <li>Add A Beer</li>
            </NavLink>
            <NavLink to="/user" >
                <li>Update Information</li>
            </NavLink>
            <NavLink to="/myInfo" >
                <li>My Information</li>
            </NavLink>
            <NavLink to="/cardGame" >
                <li>Card Game</li>
            </NavLink>
        </ul>
      </div>
    );
  }
  
  export default NavBar;