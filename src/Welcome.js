import Reat, {Component} from 'react';
import './Welcome.css';
import logo from './logo.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';


class Welcome extends Component {
    
    
    
    render () {
        return (
            <div className='logoAndButtons'>
                <Row>
                    <Header/>
                </Row>
                {/* <Image src={logo} width="354px" height="336px"/>
                <h1>Le Plat</h1> */}
               
                <Row className='buttons'> 
                    <Button variant="dark" size='lg'>Register</Button>
                </Row>
                <Row className='buttons'>
                    <Button variant="dark" size='lg'>Login</Button>
                </Row>
            </div>
        );  
    }
}

export default Welcome;