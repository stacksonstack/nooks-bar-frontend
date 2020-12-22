import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Signup from './Signup'
import Login from './Login'
function Welcome(props) {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>About the website</p>

      <Signup />
      <Login />
      

    </div>
  );
}

export default Welcome;
