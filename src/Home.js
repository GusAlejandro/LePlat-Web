import React, { Component } from "react";
import Welcome from './Welcome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';



class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    render () {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Container className="mainDiv">
                    <Row>
                        <Col>{isLoggedIn ? <h1>welcome</h1> : <Welcome/>}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;