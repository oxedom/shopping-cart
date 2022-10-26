import { Link } from "react-router-dom";


const Nav = () => {
    return ( 
        <nav className="navbar"> 
        <h1> Sam's Photos</h1>
        <Link to="/">Home</Link> 
        <Link to="shop">Shop</Link>
        <Link to='contact'>Contact</Link>
        </nav>
    );
}
 
export default Nav;