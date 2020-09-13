import React from "react";
import { Link } from "react-router-dom";


export class Login extends React.Component {
  constructor(props) {
    super(props);
  
  this.state = {

    Email: '',

    Password: '',

    first: false
}

// this.handleClick = this.handleClick.bind(this);

this.Password = this.Password.bind(this);

this.Email = this.Email.bind(this);

this.login = this.login.bind(this);

}
handleClick(e) {
  debugger;
  e.preventDefault();
  this.setState({first: true})
}



Email(event) {

  this.setState({ Email: event.target.value })

}

Password(event) {

  this.setState({ Password: event.target.value })

}

login(event) {

  debugger;

  fetch('http://localhost:8000/api/auth/login', {

      method: 'post',

      headers: {

          'Accept': 'application/json',

          'Content-Type': 'application/json'

      },

      body: JSON.stringify({

          Email: this.state.Email,

          Password: this.state.Password

      })

  }).then((Response) => Response.json())

      .then((result) => {

          console.log(result);

          if (result.Status == 'Invalid')

              alert('Invalid User');

          else

          alert('valid User');

      })

}


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          {/* <div className="image">
            <img src="" />
          </div> */}
          <div className="form">
            <div className="form-group">
           
              <input type="text" name="name" placeholder="enter name" />
            </div>
            <div className="form-group">
              
              <input type="password" name="password" placeholder="enter password" />
            </div>
            <button onClick={this.login} type="button" className="btn">
            Login
          </button>
          < a href="" >Forgot password</a>
          </div>
        </div>
        {/* <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>*/}
      </div>
    );
  }
}

