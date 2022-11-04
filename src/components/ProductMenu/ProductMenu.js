import { useEffect } from "react";
import "./ProductMenu.css";

const ProductMenu = (props) => {
  const { setCart, product, setProduct, cart } = props;

  const addToCart = (product) => {
    setCart((prev) => {
      return [...prev, product.name];
    });
  };

  const handleClick = (e) => {
    addToCart(product);
  };

  return (
    <div className="card-body">
      <button className="btn cart-btn" onClick={handleClick}>
        {" "}
        Add to Cart<p> Price: {product.price}</p>
      </button>
    </div>
  );
};

export default ProductMenu;
