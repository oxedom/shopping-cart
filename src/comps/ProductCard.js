import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { name, src: imgsrc, id, price } = props;

  const handleClick = () => {};
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
      <img class="card-img" src={imgsrc} alt="Card image cap"></img>
      </Link>
  
    </div>
  );
};

export default ProductCard;
