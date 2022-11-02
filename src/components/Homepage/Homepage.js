import { Link, useNavigate } from "react-router-dom";
import './Homepage.css'

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/shop");

  return (
    <div className="homepage-body">

      <img className="" id='homepage-img' alt="the photographer" src="https://i.imgur.com/TIIzwzi.jpg"/>

      <Link className="rotate btn btn-home" to="shop">
        Take me to Shop
      </Link>
    </div>
  );
};

export default HomePage;
