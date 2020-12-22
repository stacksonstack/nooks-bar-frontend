import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserInfo extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <p>Email:{this.props.user.email}</p>
        <p>Age:{this.props.user.age}</p>
        <p>Password:{this.props.user.password}</p>
        <NavLink to="/user">
          <button>Update Information</button>
        </NavLink>
      </div>
    );
  }
}

export default UserInfo;
