import React, { Component } from "react";

class Signup extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    password: "",
    password2: "",
  };

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  localSubmitHandler = (event) => {
    event.preventDefault();
    this.state.password === this.state.password2 ? (
      this.props.signup(this.state)
    ) : (
      alert("Passwords Did Not Match, Try Again.")
    );
  };

  render() {
    return (
      <div>
        <button
          id="btn"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Create An Account
        </button>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Sign Up
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <label>Name</label>
                  <br />
                  <input
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChanges}
                  />
                  <br />
                  <br />
                  <label>Age</label>
                  <br />
                  <input
                    type="text"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChanges}
                  />
                  <br />
                  <br />
                  <label>Email</label>
                  <br />
                  <input
                    type="text"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChanges}
                  />
                  <br />
                  <br />
                  <label>Choose Password</label>
                  <br />
                  <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChanges}
                  />
                  <br />
                  <br />
                  <label>Re-enter Password</label>
                  <br />
                  <input
                    type="password"
                    value={this.state.password2}
                    name="password2"
                    onChange={this.handleChanges}
                  />
                </form>
              </div>
              <div class="modal-footer">
                <button
                  id="btn"
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button id="btn" type="button" class="btn btn-primary" onClick={(e)=>this.localSubmitHandler(e)} data-dismiss="modal">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
