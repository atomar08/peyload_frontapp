import React, { Component } from 'react';

import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import Login from './login/login'
class Reg extends Component {

constructor(props) {
    
     super(props);
        this.state = {

          name: '',
    
          email: '',
    
          password: '',
    
          phone: '',

          city: '',

          zip:'',
    
        }
    
        this.name = this.name.bind(this);
   
        this.email = this.email.bind(this);
    
        this.password = this.password.bind(this);
    
        this.phone = this.phone.bind(this);
    
        this.city = this.city.bind(this);
        // this.state = this.state.bind(this);
        this.zip = this.zip.bind(this);
    
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
    
      phone(event) {
    
        this.setState({ phone: event.target.value })
    
      }
 
      city(event) {
    
        this.setState({ city: event.target.value })
    
      }

    
      zip(event) {
    
        this.setState({ zip: event.target.value })
    
      }
    
      
      register(event) {

    
        fetch('http://localhost:8000/api/peyload_app/', {
    
          method: 'post',
    
          headers: {
    
            'Accept': 'application/json',
    
            'Content-Type': 'application/json'
    
          },
    
          body: JSON.stringify({
    
            name: this.state.name,

            email: this.state.email,
    
            password: this.state.password,

            phone:this.state.phone,
    
            city: this.state.city,

            // state: this.state.state,
    
             zip: this.state.zip
    
    
          })
    
        }).then((Response) => {
      
                if (Response.status == 201)
      
                  alert('hi' )
      
                else
        
                  alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
        
              })
    
      }
        
      render() {
    
    
        return (
            <>
          <div className="app flex-row align-items-center" >
          {/* <NavLink to="/login"><b>Already registerd let login</b></NavLink> */}
            <Container >
    
              <Row className="justify-content-center">
    
                <Col md="8" lg="7" xl="6">
    
                  <Card className="mx-8">
    
                    <CardBody className="p-9">
    
                      <Form>
                            <div class="row" className="mb-2 pageheading">
    
                          {/* <div class="col-sm-12 btn ">

                            </div> */}
    
                        </div>
    
                        <InputGroup className="mb-3">
    
                          <Input type="text"  onChange={this.name} placeholder="Enter  Name" />
    
                        </InputGroup>
    
                        <InputGroup className="mb-3">
    
                          <Input type="email"  onChange={this.email} placeholder="Enter Email" />
    
                        </InputGroup>
    
                        <InputGroup className="mb-3">
    
                          <Input type="password"  onChange={this.password} placeholder="Enter password" />
                            </InputGroup>
                            <InputGroup className="mb-4">
    
                       <Input type="phone"  onChange={this.phone} placeholder="Enter phone" />

                      </InputGroup>
    
                        <InputGroup className="mb-4">
    
                          <Input type="text"  onChange={this.city} placeholder="Enter city" />
                        </InputGroup>

                            <InputGroup className="mb-4">
    
                                 <Input type="text"  onChange={this.zip} placeholder="Enter zip" />

                         </InputGroup> 

    
                            <InputGroup className="mb-2">
    
                            <Button  onClick={this.register}  color="purple" block>Create Account</Button>
    
                        </InputGroup>
                            
                      </Form>
    
                    </CardBody>
    
                  </Card>
    
                </Col>
    
              </Row>
   
            </Container>
   
          </div>
          </>
    
        );
    
      }
    
    }
    
    export default Reg;