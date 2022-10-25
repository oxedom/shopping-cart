import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <nav>
        <h1> Hat Store</h1>
        <Link to="/">Home</Link> 
        <Link to="shop">Shop</Link>
        <Link to='contact'>Contact</Link>
    </nav> );
}
 
export default Navbar;