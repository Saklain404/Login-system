/* eslint-disable no-lone-blocks */
import React, { useContext, useState } from "react";
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
  CardHeader,
} from "reactstrap";


import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import axios from "axios";


const SignIn = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandelSignIn = async () => {
   
    await axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin", {
      email:email,
      password: password
    } )
    .then(({data})=> {
      console.log(data);
      context.setUser(data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    HandelSignIn();
    console.log(context.user?.token);
  }

  
    if(context.user?.token) {
      return<Redirect to="/" />
    }
    
      return (
        <Container className="text-center">
          <Row>
            <Col lg={6} className="offset-lg-3 mt-5">
              <Card>
                <Form onSubmit={HandleSubmit}>
                  <CardHeader className="">Sign In here</CardHeader>
                  <CardBody>
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
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      onClick={HandleSubmit}
                      type="submit"
                      block
                      color="primary"
                    >
                      Sign In
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      )
  

      
  
      }

export default SignIn;
