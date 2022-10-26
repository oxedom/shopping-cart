const ProductCard = (props) => {
  const { name, src: imgsrc, id, price } = props;

  const handleClick = () => {};
  return (
    <div className="card">
      <img class="card-img" src={imgsrc} alt="Card image cap"></img>
      <div className="card-body">
        <h3> Title: {name}</h3>
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
