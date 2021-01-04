import React, { Component } from "react";

class UpdateUser extends Component {
  state = {
    name: this.props.user.name,
    email: this.props.user.email,
    password: this.props.user.password,
    password2: this.props.user.password,
    age: this.props.user.age,
  };

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        {this.state && this.props.user ? (
          <div class="bar-container">
            <div class="bar">
              <img alt="Bar Glass Rack" src={`/img/barTop2.png`} id="bar-top" />
              <div class="frame-container">
                <div class="frame">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.props.update(this.state);
                    }}
                  >
                    <label>Name</label><br/>
                    <input
                      type="text"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleChanges}
                    /><br/><br/>
                    <label>Email</label><br/>
                    <input
                      type="text"
                      value={this.state.email}
                      name="email"
                      onChange={this.handleChanges}
                    /><br/><br/>
                    <label>Password</label><br/>
                    <input
                      type="password"
                      value={this.state.password}
                      name="name"
                      onChange={this.handleChanges}
                    /><br/><br/>
                    <label>Re-enter Password</label><br/>
                    <input
                      type="password"
                      value={this.state.password2}
                      name="password2"
                      onChange={this.handleChanges}
                    /><br/><br/>
                    <button>Update Info</button>
                  </form>
                </div>
              </div>
              <img
                alt="Bar Table And Stool"
                src={`/img/barStool2.png`}
                id="bar-stool"
              />
            </div>
          </div>
        ) : (
          <h2>Loading User Info...</h2>
        )}
      </>
    );
  }
}

export default UpdateUser;
