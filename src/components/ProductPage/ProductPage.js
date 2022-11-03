import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './ProductPage.css'
import data from "../toy-api/data"
import ProductMenu from "../ProductMenu/ProductMenu"

const ProductPage = (props) => {
  const { setCart, cart } = props.props;

  const errorIMG = "https://www.rastanley.com.au/img/products/NoImageLarge.png";
  const errorObj = { name: "NO IMG", src: errorIMG };
  const getProdByID = (id) => data.find((item) => item.id == id);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [product, setProduct] = useState({});
  const { fromShopRoute = false, prodProps = errorObj } = location.state || {};

  //Use Effect that runs when the COMP mounts
  useEffect((e) => {
    //If the User got to the product page from the Shop page,
    // we will pass Shop page Data to the Product to prevent overfetching the Data
    if (fromShopRoute) {
      setProduct(prodProps);
    }

    //If the User got to the page by any other means we will "fetch" the data from an API (Local DATA File that in the REPO in this example)
    if (!fromShopRoute) {
      //Will search for the product by searching by it's ID
      let _product = getProdByID(params.id);
      //If the search was a successful  it will set the Product page to the data from the search
      if (_product !== undefined) {
        setProduct(_product);
      }
      //If the search returns undefiend it will set the Product to an errorObj and reroute the user to shop page
      else {
        setProduct(errorObj);
        navigate("/shop");
      }
    }
  }, []);

  return (
    <div>
      <div className="product-page-container">

        <div className="product-header">
          <h1> {product.name}</h1>
          <ProductMenu setCart={setCart} product={product} setProduct={setProduct} cart={cart}></ProductMenu>
        </div>



        <div className="img-container">
          <div className="slide-btn"> Back</div>
          <img
            className="product-img"
            loading="lazy"
            src={product.src}
            alt={product.name}
          />

          <div className="slide-btn "> Next </div>

        </div>



      </div>

    </div>
  );
};

export default ProductPage;
