import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Header from './Header';
import Button from 'react-bootstrap/Button';


class Login extends Component {
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