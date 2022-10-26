import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { name, src: imgsrc, id, price } = props;


  return (
    <div className="card">
      
      <Link state={{fromShopRoute: true}} to={{pathname: `/shop/product/${id}`}}>
      <img className="card-img" src={imgsrc} alt="Card image cap"></img>
      </Link>
  
    </div>
  );
};

export default ProductCard;
