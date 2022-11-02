import { Link, useNavigate } from "react-router-dom";
import './HomePage.className'

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/shop");

  return (
    <div className="homepage-body">


      <Link className="img-home rotate" to="shop">
        <img
          className="rotate"
          id="homepage-img"
          src="https://i.imgur.com/TIIzwzi.jpg"
        />
      </Link>

      <Link className="rotate btn btn-home" to="shop">
        Take me to Shop
      </Link>
    </div>
  );
};

export default HomePage;
