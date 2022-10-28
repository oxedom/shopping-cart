const ProductMenu = (props) => {
    return ( 
        <div className="card-body">

        <div className="card-title">
        <h3>{props.name}</h3>
        </div>


        <section className="card-pricebox"> 
    
   
          <button className="btn" onClick={alert}>
            {" "}
            Add to Cart      <p> Price: {props.price}</p>
          </button>
        </section>
     
       
      </div>
    
    
        );
}
 
export default ProductMenu;