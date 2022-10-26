import { useLocation } from "react-router-dom";
import {useState } from "react";
const ProductPage = () => {


    const location = useLocation()
    const [product, setProduct] = useState({})
    const {fromShopRoute = false, prodProps} = location.state || {}
    

    

    return ( <div>
        <h1> {prodProps.name}</h1>
        <img className='product-img' src={prodProps.src}/>
    </div>  );
}
 
export default ProductPage;