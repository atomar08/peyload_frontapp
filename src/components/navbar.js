import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCardImage, MDBView,MDBCol,MDBCardTitle
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import about from './about'



class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="black" dark expand="md">
      
      <MDBCol md="">
            <MDBView hover zoom>
              <img position="left"
                src=""
                className="img-fluid"
                alt=""
              />
              {/* <MDBMask className="flex-center">
                <p className="white-text"></p>
              </MDBMask> */}
            </MDBView>
          </MDBCol>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
           
            <MDBNavItem>
            <MDBCardTitle  id="p1"><marque><h1>Welcome to peyload</h1></marque></MDBCardTitle>
            </MDBNavItem>
          </MDBNavbarNav>
          
          <MDBNavbarNav right>
          <MDBNavItem active>
              <MDBNavLink to="/"><h3>Home</h3> </MDBNavLink>
            </MDBNavItem><br></br>
            <MDBNavItem>
              <MDBNavLink to={"/about"}><h3>About</h3></MDBNavLink>
             
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;