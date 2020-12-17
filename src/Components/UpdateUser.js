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
        {console.log("user", this.props.user)}
        {console.log("state:", this.state)}
        {this.state && this.props.user ? (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.props.update(this.state);
              }}
            >
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleChanges}
              />
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleChanges}
              />
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                name="name"
                onChange={this.handleChanges}
              />
              <label>Re-enter Password</label>
              <input
                type="password"
                value={this.state.password2}
                name="password2"
                onChange={this.handleChanges}
              />
              <button>Update Info</button>
            </form>
          </div>
        ) : (
          <h2>Loading User Info...</h2>
        )}
      </>
    );
  }
}

export default UpdateUser;
