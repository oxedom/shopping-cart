import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

const HomePage = () => {
    return ( <div>
        <h1> Hello From Homepage</h1>
        <Button className="square-btn">
            <Link to='shop'>
            Take me to Shop
            </Link>
             </Button>
    </div> );
}
 
export default HomePage
