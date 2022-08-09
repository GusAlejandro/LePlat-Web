import React, { Component } from "react";
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


class Register extends Component {
    render () {
        return (
            <div className="logoAndbuttons">
                <Container className="mainSec">
                    <Row>
                        <Header/>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username"/>
                            </Form.Group>
                    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Register</Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;