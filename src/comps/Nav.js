import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
    return ( 
        <Navbar variant='primay' bg="dark" expand="lg"> 
        <h1> Hat Store</h1>
        <Link to="/">Home</Link> 
        <Link to="shop">Shop</Link>
        <Link to='contact'>Contact</Link>
        </Navbar>
    );
}
 
export default Nav;