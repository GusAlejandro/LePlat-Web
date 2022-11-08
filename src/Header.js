import './Header.css';
import { Image } from 'react-bootstrap';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="logoAndButtons">
            <Link to='/'>
                <Image src={logo} width="354px" height="336px"/>
            </Link>
            <h1>Plat</h1>
        </div>
    )
}

export default Header;