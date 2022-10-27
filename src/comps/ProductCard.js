import { Link } from "react-router-dom";


const ProductCard = (props) => {
  const {src: imgsrc, id, name} = props;


  return (
    <div className="card">
      
      <Link state={{fromShopRoute: true, prodProps: props}} to={{pathname: `/shop/product/${id}`}}>
      <img className="card-img" loading="lazy" src={imgsrc} alt={name}></img>
      </Link>
  
    </div>
  );
};

export default ProductCard;
