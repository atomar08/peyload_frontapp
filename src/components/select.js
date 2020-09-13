import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Reg from './registration';


import { Jumbotron } from "reactstrap";

class FormsPage extends React.Component {
  
  render() {
    return (
        
       <>

        <div className="float-child1">
          <div className=""><Reg/></div>
        </div>
        
        {/* <div class="float-child2">
          <div class=""><Login/></div>
        </div>
         */}
         </>
      
    );
  }
}

export default FormsPage;