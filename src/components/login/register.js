import React from "react";
//import loginImg from "../../login.svg";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
export class Register extends React.Component {
  constructor(props) {
    
    super(props);
       this.state = {

         name: '',
   
         email: '',
   
         password: '',
   
        
   
       }
   
       this.name = this.name.bind(this);
  
       this.email = this.email.bind(this);
   
       this.password = this.password.bind(this);
   
      //  this.phone = this.phone.bind(this);
   
      //  this.city = this.city.bind(this);
      //  // this.state = this.state.bind(this);
      //  this.zip = this.zip.bind(this);
   
       this.register = this.register.bind(this);
   
     }
   
     name(event) {
   
       this.setState({ name: event.target.value })
   
     }
   
     email(event) {
   
       this.setState({ email: event.target.value })
   
     }

     password(event) {
   
       this.setState({ password: event.target.value })
   
     }
   
    
   
     
     register(event) {

   
       fetch('http://localhost:8000/api/auth/register', {
   
         method: 'post',
   
         headers: {
   
           'Accept': 'application/json',
   
           'Content-Type': 'application/json'
   
         },
   
         body: JSON.stringify({
   
           name: this.state.name,

           email: this.state.email,
   
           password: this.state.password,

          
   
         })
   
       }).then((Response) => {
     
               if (Response.status == 200)
     
                 alert('hi' )
     
               else
       
                 alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
       
             })
   
     }
       
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">register</div>
       
          {/* <div className="image">
            <img src="" />
          </div> */}
          
         <div className="content">
        
          
    
    <div className="form">
            <div className="form-group">
       
             <input type="text" name="name" placeholder="user name" />
            </div>
            <div className="form-group">
         
             <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
            
            <input type="password" name="password" placeholder="password" />
            </div>
            
            <button onClick={this.register} type="button" className="btn">
             Register
          </button>
            </div>
            </div>
            </div>
           
         
      
    );
  }
}