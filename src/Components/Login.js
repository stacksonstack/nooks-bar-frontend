import React, {Component} from 'react'

class Login extends Component{
    render(){
        return(
            <div>
                <h2>Login</h2>
                <form>
                    <label>Email</label>
                    <input type="text" value={null} name="email" onChange={null}/>
                    <label>Password</label>
                    <input type="text" value={null} name="password" onChange={null}/>
                    <button>Login!</button>
                </form>
            </div>
        )
    }
}

export default Login;