import { Link, useNavigate } from "react-router-dom";
import './Homepage.css'

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/shop");

  return (
    <div className="homepage-body">



      <Link className="rotate btn btn-home" to="shop">
        Take me to Shop
      </Link>
    </div>
  );
};

export default HomePage;
