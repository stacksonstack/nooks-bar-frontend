import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <ul className="nav">
        {props.userId ? (
          <>
          <li> Welcome {props.user.name}</li>
            <NavLink to="/savedBeers">
              <li>Saved Beers</li>
            </NavLink>
            <NavLink to="/beers">
              <li>Beers</li>
            </NavLink>
            <NavLink to="/beers/new">
              <li>Add A Beer</li>
            </NavLink>
            <NavLink to="/myInfo">
              <li>My Information</li>
            </NavLink>
            <NavLink to="/cardGame">
              <li>Card Game</li>
            </NavLink>
            <li>Log Out</li>
          </>
        ) :  <li> Hello! We're so excited to have you here! ...have you here! </li>}
      </ul>
    </div>
  );
}

export default NavBar;
