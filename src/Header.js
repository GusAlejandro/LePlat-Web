import './Header.css';
import { Image } from 'react-bootstrap';
import logo from './logo.jpg';


function Header() {
    return (
        <div className="logoAndButtons">
            <Image src={logo} width="354px" height="336px"/>
            <h1>Le Plat</h1>
        </div>
    )
}

export default Header;