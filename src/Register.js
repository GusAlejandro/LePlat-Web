import React, { Component } from "react";
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

// temp url http://127.0.0.1:5000

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isSubmitting: false,
            showError: false,
            showSuccess: false,
            errorMessage: ''
        }
        
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();

        this.dismissError = this.dismissError.bind(this);
        this.dismissSuccess = this.dismissSuccess.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
    }

    dismissError () {
        this.setState({
            showError: false
        })
    }

    dismissSuccess () {
        this.setState({
            showSuccess: false
        })
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
            isSubmitting: true,
            showError: false,
            showSuccess: false
        })
        let username = this.state.username;
        let password = this.state.password;
        axios.post(
            'http://192.168.1.204:5000/register',
            {'username': username, 'password': password},
        ).then((response) => {
            this.setState({
                isSubmitting : false
            })
            if (response.status === 200){
                // succesful sign up
                this.setState({
                    username: '',
                    password: '',
                    showSuccess: 'true'
                })
            }
        }).catch((error) => {
            this.setState({
                isSubmitting: false
            })
            if (error.response) {
                // server gives error, username taken error
                if (error.response.status === 403) {
                    console.log('username is taken');
                    this.setState({
                        errorMessage: 'Username is taken.',
                        showError: true
                    })
                } else {
                    console.log('connection error');
                    this.setState({
                        errorMessage: 'Connection or Server Error, try again.',
                        showError: true
                    })
                }
            } else if (!error.response || error.request) {
                // server or connecction error
                console.log('uncaught error');
                this.setState({
                    errorMessage: 'Uncaught error, try again.',
                    showError: true
                })
            }
        })
        event.preventDefault();
    }

    render () {

        const errorMessage = this.state.errorMessage;
        const errorAlertStyle = this.state.showError ? {} : {display:'none'};
        const successAlertStyle = this.state.showSuccess ? {} : {display: 'none'};

        return (
            <div className="logoAndbuttons">
                <Container className="mainSec">
                    <Row>
                        <Header/>
                    </Row>
                    <Row>
                        <Alert variant="success" dismissible="true" onClose={this.dismissSuccess} style={successAlertStyle}>Account created succesfully ! <Link to='/login'>Crete an account here.</Link></Alert>
                        <Alert variant="danger" dismissible='true' onClose={this.dismissError} style={errorAlertStyle}>{errorMessage}</Alert>
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