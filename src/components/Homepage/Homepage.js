import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Homepage.css'

const HomePage = () => {


  const navigate = useNavigate();
  const handleClick = () => navigate("/shop");
  const [counter, setCounter] = useState(5)


  useEffect(() => {
    if(counter === 0) {
      alert('www.google.com')
    }

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);


  }, [counter]);

  return (
    <div className="homepage-body">
                  <h1> Taking the photo in... {counter}!</h1>
                 <img className="" id='homepage-img' alt="the photographer" src="https://i.imgur.com/TIIzwzi.jpg"/>

           <Link  to="shop">

      </Link>
   
 
    </div>
  );
};

export default HomePage;
