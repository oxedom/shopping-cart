import { Link } from "react-router-dom";

const Nav = (props) => {
  // const [count,SetCount] = useState(0)
  return (
    <nav className="navbar">
      <h1> Sam's Photos</h1>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="contact">Contact</Link>
      <div>
        <img src=""/> 
        <p> test</p>
      </div>
    </nav>
  );
};

export default Nav;
