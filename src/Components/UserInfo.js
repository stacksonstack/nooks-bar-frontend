import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserInfo extends Component {
  render() {
    return (
      <div id="user-container">
      <div id="user-info">
        <img alt="Bar Glass Rack" src={`/img/barTop2.png`} id="bar-top"/>
        <div id="user2">
        <div id="user">
        <h2>{this.props.user.name}</h2>
        <p>Email:{this.props.user.email}</p>
        <p>Age:{this.props.user.age}</p>
        <p>Password:{this.props.user.password}</p>
        <NavLink to="/user">
          <button>Update Information</button>
        </NavLink><br/>
        </div>
        </div>
        <img alt="Bar Table And Stool" src={`/img/barStool2.png`} id="bar-stool"/>
      </div>
      </div>
    );
  }
}

export default UserInfo;
