import {  useNavigate } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  // const [counter, setCounter] = useState(5);
  const handleClick = () => navigate("/shop");


  return (
    <div className="homepage-body zoom-in-zoom-out ">
      <h1> Sam's Photo store</h1>
      <img
        onClick={handleClick}
        id="homepage-img"
        alt="the photographer"
        src="https://i.imgur.com/TIIzwzi.jpg"
      />
    </div>
  );
};

export default HomePage;
