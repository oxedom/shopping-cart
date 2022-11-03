import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Homepage.css'

const HomePage = () => {


  const navigate = useNavigate();

  const [counter, setCounter] = useState(5)
  const handleClick = () => navigate("/shop")

  useEffect(() => {
    if (counter === 0) { navigate("/shop"); }

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);


  }, [counter]);

  return (
    <div className="homepage-body zoom-in-zoom-out ">
      <h1> Taking the photo in... {counter}!</h1>
      <img onClick={handleClick} id='homepage-img' alt="the photographer" src="https://i.imgur.com/TIIzwzi.jpg" />
    </div>
  )


};

export default HomePage;
