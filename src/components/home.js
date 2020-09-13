import React, { Component } from "react";
import {  MDBMask, MDBView,MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdbreact";
//import  {MDBSelect}  from "mdbreact";
import Reg from './registration';
import Login from './login';
import { BrowserRouter, Route, Link,Switch ,HashRouter,NavLink} from 'react-router-dom';
import { LoginForm } from "./loginform";
import {Register} from './register';
//import  Login  from './combine';



class Home extends Component  {
  constructor(props){
    super(props);
    this.state = {
    }
  //  this.state.handleClick();
  };
  showLoginModal() {
    this.setState({
      showLogin: false,
    });
  }
  
 

  hideLoginModal() {
    this.setState({
      showLogin: true,
    });

    // TODO: Likely change the route or do something else here...
  }

  render() {
    return (
     
        <MDBContainer className="mt-0 text-center">
       
        <MDBRow className="flex-left">
         
          <MDBCol>

            
            {/* <MDBJumbotron className="p-0" gradient="black">
              */}
              <MDBCardBody>
                
              <HashRouter>
                
              <NavLink to="/"><b>Already registerd let login</b></NavLink>
              {/* <MDBBtn    color="purple" >Already registerd lets login</MDBBtn> */}
                <Switch><Route path="/" component={Login} /></Switch>

                {/* <NavLink to="/registration"><b>reset password</b></NavLink>
              {/* <MDBBtn    color="purple" >Already registerd lets login</MDBBtn> */}
                {/* <Switch><Route path="/registration" component={Reg} /></Switch> */} 

                {/* <Link to="/registration" className="btn btn-link">Register</Link>
               
                <NavLink to="/registration"><b> registerd </b></NavLink>
               
                  <Switch><Route path="/registration" component={Reg} /></Switch>
                 
                 */}
              
          
            </HashRouter> 
              
             
                {/* <MDBCardText>
                 
                </MDBCardText> */}
           
                <div>
        {/* <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select> */}
      </div>
              
              </MDBCardBody>
            {/* </MDBJumbotron> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        );
  }
}


export default Home;
