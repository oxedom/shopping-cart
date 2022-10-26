const ProductCard = (props) => {
  const { name, src: imgsrc, id, price } = props;

  const handleClick = () => {};
  return (
    <div className="card">
      <img class="card-img" src={imgsrc} alt="Card image cap"></img>
      <div className="card-body">

        <div className="card-title">
        <h3>{name}</h3>
        </div>


        <section className="card-pricebox"> 
        <p> Price: {price}</p>
          <button className="btn" onClick={handleClick}>
            {" "}
            Add to Cart
          </button>
        </section>
     
       
      </div>
    </div>
  );
};

export default ProductCard;
