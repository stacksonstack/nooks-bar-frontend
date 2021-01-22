import React, {Component} from 'react'

class Signup extends Component{
    render(){
        return(
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
            <div class="modal-body"><form>
                    <label>Name</label><br/>
                    <input type="text" value={null} name="name" onChange={null}/><br/><br/>
                    <label>Age</label><br/>
                    <input type="text" value={null} name="age" onChange={null}/><br/><br/>
                    <label>Email</label><br/>
                    <input type="text" value={null} name="email" onChange={null}/><br/><br/>
                    <label>Choose Password</label><br/>
                    <input type="text" value={null} name="password" onChange={null}/><br/><br/>
                    <label>Re-enter Password</label><br/>
                    <input type="text" value={null} name="password2" onChange={null}/><br/><br/>
                    <button id="btn">Sign Up!</button>
                </form></div>
            <div class="modal-footer">
              <button
              id="btn"
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button id="btn" type="button" class="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SIGNUP MODAL --> */}
            </div>
        )
    }
}

export default Signup;