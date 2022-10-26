import { useLocation } from "react-router-dom";

const ProductPage = () => {


    const location = useLocation()
    const {fromShopRoute = 'defaultValue'} = location.state || {}
    console.log(fromShopRoute);

    

    return ( <div>
        <h1> I am Product Page</h1>
    </div>  );
}
 
export default ProductPage;