import img1 from "../imgs/1. Picture.jpg";


const ProductCard = (props) => {
  const {name, src: imgsrc, id, price } = props


  const handleClick = () => {};
  return (
    <div className="card">
      <img class="card-img-top  img-fluid" src={imgsrc} alt="Card image cap"></img>
      <div className="card-body">
        <p> Title: {name}</p>
        <p> Price: {price}</p>
        <button className="btn" onClick={handleClick}>
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
