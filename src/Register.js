import React, { Component } from "react";
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";

// temp url http://127.0.0.1:5000

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isSubmitting: false
        }
        this.handleRegister = this.handleRegister.bind(this);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
    }

    logFields = () => {
        const {username, password} = this.state;
        console.log(username + ' ' + password);
    }

    handleUsername () {
        const value = this.usernameRef.current.value;
        this.setState({
            username: value
        }, () => this.logFields())
    }

    handlePassword () {
        const value = this.passwordRef.current.value;
        this.setState({
            password: value
        }, () => this.logFields())
    }

    handleRegister (event) {
        this.setState({
            isSubmitting: true
        })
        let username = this.state.username;
        let password = this.state.password;
        axios.post(
            'http://127.0.0.1:5000/register',
            {'username': username, 'password': password},
        ).then((response) => {
            this.setState({
                isSubmitting : false
            })
            if (response.status == 200){
                // succesful sign up
                this.setState({
                    username: '',
                    password: ''
                })
            }
        }).catch((error) => {
            this.setState({
                isSubmitting: false
            })
            if (error.response) {
                // server gives error, username taken error
            } else if (!error.response || error.request) {
                // server or connecction error
            }
        })
        event.preventDefault();
    }

    render () {
        return (
            <div className="logoAndbuttons">
                <Container className="mainSec">
                    <Row>
                        <Header/>
                    </Row>
                    <Row>
                        <Form onSubmit={this.handleRegister}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" ref={this.usernameRef} onChange={this.handleUsername} value={this.state.username}/>
                            </Form.Group>
                    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={this.passwordRef} onChange={this.handlePassword} value={this.state.password}/>
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