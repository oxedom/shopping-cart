import {useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './ProductPage.css'
import data from "../toy-api/data"
import ProductMenu from "../ProductMenu/ProductMenu"

const ProductPage = (props) => {
  const { setCart, cart } = props.props;




  const getProdByID = (id) => data.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState({});
  const { id } = useParams();
  //Use Effect that runs when the COMP mounts
  useEffect(() => {

      //Will search for the product by searching by it's ID
      let _product = getProdByID(params.id);
   
      //If the search was a successful  it will set the Product page to the data from the search
      if (_product !== undefined) {
        setProduct(_product);
      }
      //If the search returns undefiend it will set the Product to an errorObj and reroute the user to shop page
      else {
        navigate("/shop");
        //TEMP FIX
        navigate(0)
      }
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  , [id])

  useEffect(() => {
    navigate()
  },
       // eslint-disable-next-line react-hooks/exhaustive-deps
    [params.id])

  const handleNext = () => {
    let newRoute = product.id + 1
    if (newRoute === data.length + 1) { newRoute = 1 }
    navigate(`/shop/product/${newRoute}`, { replace: true })
    //TEMP FIX
    // navigate(0)
  }

  const handleBack = () => {
    let newRoute = product.id - 1
    if (newRoute === 0) { newRoute = 1 }
    navigate(`/shop/product/${newRoute}`, { replace: true })
  }


  return (
    <div >
      <div className="product-page-container">

        <div className="product-header">
          <h1> {product.name}</h1>
          <ProductMenu setCart={setCart} product={product} setProduct={setProduct} cart={cart}></ProductMenu>
        </div>



        <div className="img-container">
          <div onClick={handleBack} className="slide-btn"> Back</div>
          <img
            className="product-img"
            loading="lazy"
            src={product.src}
            alt={product.name}
          />

          <div onClick={handleNext} className="slide-btn ">
            Next
          </div>

        </div>



      </div>

    </div >
  );
};

export default ProductPage;
