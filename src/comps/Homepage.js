import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()
  const handleClick = () => navigate('/shop')

  return (
    <div   className="homepage-body">



      {/* <h1 className="title-background"> 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
    Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer Sam Photographer 
      
      
      
        </h1> */}


        <Link className="img-home" to="shop">
        <img id='homepage-img' src="https://i.imgur.com/TIIzwzi.jpg"/>
          </Link>


 


    
    
  

  
        <Link className="btn btn-home" to="shop">Take me to Shop</Link>

    </div>
  );
};

export default HomePage;
