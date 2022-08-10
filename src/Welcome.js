import React, {Component} from 'react';
import './Welcome.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Welcome extends Component {
    
    
    
    render () {
        return (
            <div className='logoAndButtons'>
                <Row>
                    <Header/>
                </Row>
                <Row className='buttons'>
                    <Link to='/register'>
                        <div className="d-grid gap-2"> 
                        <Button variant="dark" size='lg'>Register</Button>
                        </div>
                    </Link>
                </Row>
                <Row className='buttons'>
                    <Link to='/login'>
                        <div className="d-grid gap-2"> 
                        <Button variant="dark" size='lg'>Login</Button>
                        </div>
                    </Link>
                </Row>
            </div>
        );  
    }
}

export default Welcome;