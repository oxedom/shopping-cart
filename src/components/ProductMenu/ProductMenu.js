import "./ProductMenu.css";

const ProductMenu = (props) => {
  const { setCart, product } = props;

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
      <button className="btn" onClick={handleClick}>
        {" "}
      <p> Add to Cart</p>
      <p> Price: {product.price}</p>
      </button>
    </div>
  );
};

export default ProductMenu;
