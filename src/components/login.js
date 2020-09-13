import React, { Component } from 'react';

// import './App.css';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { BrowserRouter,Route, Router,Switch ,HashRouter,NavLink} from 'react-router-dom';
import Reg from './registration';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class Loginform extends Component {


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

        fetch('http://localhost:8000/api/peyload_app/', {

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

            <div className="app flex-row align-items-center">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">


                            <CardGroup>

                                <Card className="p-2"  gradient="purple" >

                                    <CardBody>

                                        
                                    <Form >
                                         <InputGroup className="mb-3">

                                        <Input type="text" onChange={this.Email} placeholder="Enter Email" />

                                        </InputGroup>

                                        <InputGroup className="mb-4">

                                        <Input type="password" onChange={this.Password} placeholder="Enter Password" />

                                        </InputGroup>

                                        <Button onClick={this.login} color="purple" block>Login</Button>

                                    </Form>
                                   
                                    
                                    </CardBody>
                                    
                                 
                                </Card>
                               
                            </CardGroup>
                            </Col>
                            
                            </Row>
                            <p>move to second page</p>

                </Container>
</div>
        );
    }
}

export default Login;