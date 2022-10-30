const ProductMenu = (props) => {
  const {setCart, prod} = props

    return ( 
        <div className="card-body">
          <button className="btn"  onClick={(e) => {props.setCart(prev => [prod, ...prev])}} >
            {" "}
            Add to Cart<p> Price: {prod.price}</p>
          </button>
      </div>
    
    
        );
}
 
export default ProductMenu;