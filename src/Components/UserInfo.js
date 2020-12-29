import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserInfo extends Component {
  render() {
    return (
      <div class="container">
      <div class="bar">
        <img alt="Bar Glass Rack" src={`/img/barTop2.png`} id="bar-top"/>
        <div class="frame-container">
        <div class="frame">
        <h1>{this.props.user.name}</h1>
        <p>Email:{this.props.user.email}</p>
        <p>Age:{this.props.user.age}</p>
        <p>Password:{this.props.user.password}</p>
        <NavLink to="/user">
          <button id="btn">Update Information</button>
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
