const ProductMenu = (props) => {
    return ( 
        <div className="card-body">

        <div className="card-title">
        <h3>{props.name}</h3>
        </div>


        <section className="card-pricebox"> 
        <p> Price: {props.price}</p>
          <button className="btn" onClick={alert}>
            {" "}
            Add to Cart
          </button>
        </section>
     
       
      </div>
    
    
        );
}
 
export default ProductMenu;