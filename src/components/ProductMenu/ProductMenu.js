import './ProductMenu.css'

const ProductMenu = (props) => {

  const { setCart, prod } = props;
  const addToCart = () => { setCart(prevState => { return [...prevState, prod.name]}) }
  const handleClick = (e) => {addToCart()}

  return (
    <div className="card-body">
      <button className="btn" onClick={handleClick} >
        {" "}
        Add to Cart<p> Price: {prod.price}</p>
      </button>
    </div>
  );
};

export default ProductMenu;
