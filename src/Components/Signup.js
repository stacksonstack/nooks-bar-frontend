import React, {Component} from 'react'

class Signup extends Component{
    render(){
        return(
            <div>
                <h2>Create An Account</h2>
                <form>
                    <label>Name</label>
                    <input type="text" value={null} name="name" onChange={null}/>
                    <label>Age</label>
                    <input type="text" value={null} name="age" onChange={null}/>
                    <label>Email</label>
                    <input type="text" value={null} name="email" onChange={null}/>
                    <label>Choose Password</label>
                    <input type="text" value={null} name="password" onChange={null}/>
                    <label>Re-enter Password</label>
                    <input type="text" value={null} name="password2" onChange={null}/>
                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default Signup;