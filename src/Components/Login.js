import React, { Component } from "react";

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  localSubmitHandler = (event, email) => {
    event.preventDefault();
    
    this.props.login(email)
   
  };
  render() {
    return (
      <>
        {/* <!-- Button trigger modal --> */}
        <button
          id="btn"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Login
        </button>
        {/* 
<!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Login
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
                <form >
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
                    name="password"
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
                <button id="btn" onClick={(e)=>this.localSubmitHandler(e, this.state.email)} type="button" class="btn btn-primary" data-dismiss="modal">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
