import React, { Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    credentials: {email: '', password: ''}
  }

  login = event => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    )
    .catch( error => console.error(error))
  }

  register = event => {
    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Enter email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.credentials.email}
                onChange={this.onChange}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Enter Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.credentials.password}
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
      
        // <button onClick={this.login}>Login</button>
        // <button onClick={this.register}>Register</button>
      
    );
  }
}

export default Login;