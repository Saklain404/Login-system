/* eslint-disable no-lone-blocks */
import React, { useContext, useState } from 'react'
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
  } from "reactstrap";

import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { v4 } from 'uuid';


const SignUp =() => {
    const context = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('')


    const HandleSignup = async () => {

      

      axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister", {
        email: email ,
        password: password,
        name: name,
        mobile: phoneNo ,
        id: v4()
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    

    
     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        HandleSignup();
        setName("");
        setEmail("")
        setPassword("")
        setPhoneNo("")

    }

        {
            if ( context.user && context.user?.token ){
            return <Redirect to="/" />
        } 
        return(
            <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Signup here</CardHeader>
              <CardBody>
              <FormGroup row>
                  <Label for="email" sm={3}>
                    Name
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                     
                      placeholder="Enter your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Phone No.
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="phone number"
                      value={phoneNo}
                      onChange={e => setPhoneNo(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button onClick={handleSubmit} type="submit" block color="primary">
                  Sign Up
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
        )
    }
    
}

export default SignUp;
