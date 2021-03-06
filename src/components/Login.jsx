import React from 'react';
import Navbar from '../components/Navbar';
import FormRedux from './FormRedux';
import { Link } from 'react-router-dom';

// import FormControlled from './FormControlled';

const Login = (props) => {

  function log(name) {
    console.log(name);
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid fade-in">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            {/* <FormControlled log={log.bind(this)} /> */}
            <FormRedux />
            <button className="center">
              <Link className="link" to={"/community"}>Community</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;