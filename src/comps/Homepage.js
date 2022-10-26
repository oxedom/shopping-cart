import { Link } from "react-router-dom";


const HomePage = () => {
    return ( <div>
        <h1> Hello From Homepage</h1>
            <button className="btn">
            <Link to='shop'>
            Take me to Shop
            </Link>
            </button>
         
          
    </div> );
}
 
export default HomePage
