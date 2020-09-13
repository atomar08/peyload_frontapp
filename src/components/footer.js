import React, { Component } from "react";

import {MDBBtn,MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
     
          <div className="footer">
            {/* <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                
                <MDBCol md="8">
                
                
                <MDBRow className="text-center">
                <h5 className="title"> Content us</h5>
            <MDBCol md="2">
              <MDBBtn tag="a" floating color="purple" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Temucula 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="2">
              <MDBBtn tag="a" floating color="purple" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-7:00</p>
            </MDBCol>
            <MDBCol md="2">
              <MDBBtn tag="a" floating color="purple" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
            
              <p className="mb-md-0">@gmail.com</p>
            </MDBCol><br></br><br></br>
             */}
            <MDBRow>
                
                <MDBCol md="8">
                
         
     
            <ul>
            <h3 className="title">share with us</h3>
                <li className="list-inline-item" >
                  <a href="#!" className="p-2 fa-lg w-ic" color="purple">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/learnbuildteach/" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="facebook" />
                  </a>
                </li>
              </ul>
       
            
            {/* </MDBRow> */}
            </MDBCol>
         
        
             
             
  
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.peyload.com"> peyload.com </a>
              </MDBContainer>
            </div>
          </MDBRow>

          </div>
        );
  }
}

export default Footer;
