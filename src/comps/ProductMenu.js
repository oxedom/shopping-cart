const ProductMenu = (props) => {
  const {setCart, prod} = props

    return ( 
        <div className="card-body">

        <div className="card-title">
        <h3>{prod.name}</h3>
        </div>


        <section className="card-pricebox"> 
    
      
          <button className="btn"  onClick={(e) => {props.setCart(prev => [prod, ...prev])}} >
            {" "}
            Add to Cart<p> Price: {prod.price}</p>
          </button>
        </section>
     
       
      </div>
    
    
        );
}
 
export default ProductMenu;