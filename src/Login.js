import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Header from './Header';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isSubmitting: false,
            showError: false,
            errorMessage: ''
        }

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();

        this.dismissError = this.dismissError.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);

        
    }

    dismissError () {
        this.setState({
            showError: false
        })
    }

    handleUsername () {
        const value = this.usernameRef.current.value;
        this.setState({
            username: value
        })
    }

    handlePassword () {
        const value = this.passwordRef.current.value;
        this.setState({
            password: value
        })
    }

    handleLogin (event) {
        this.setState({
            isSubmitting: true,
            showError: false, 
        })
        let username = this.state.username;
        let password = this.state.password;

        axios.post(
            'http://192.168.1.204:5000/login',
            {'username': username, 'password': password}
        ).then((response) => {
            // check response 
            if(response.status === 200){
                //succesful login 
                //set session cookie 
                //send user to '/home'
            }
        }).catch((error) => {
            // deal with errors 
        })
        event.preventDefault();
    }

    render () {
        return (
            <div className='logoAndbuttons'>
                <Container className='mainSec'>
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
                            <Button variant="primary" type="submit">Login</Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;