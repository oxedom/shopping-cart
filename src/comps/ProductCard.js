

import img1 from '../imgs/1. Picture.jpg'

const ProductCard = (props) => {

    const handleClick = () => {}
    return (<div className="card"  >
          <img class="card-img-top  img-fluid" src={''} alt="Card image cap"></img>
        <div className="card-body">
        <p> Title: Camp Urim</p>
        <p> Price: 100$</p>
        <button className='btn' onClick={handleClick}> Add to Cart</button>
             </div>
         </div> ) ;
}
 
export default ProductCard;