

import img1 from '../imgs/1. Picture.jpg'

const ProductCard = (props) => {

    const handleClick = () => {}
    return (<div className="card m-3" style={{width: '20%'}}>
          <img class="card-img-top  img-fluid" src={img1} alt="Card image cap"></img>
        <div className="card-body">
        <p> Title: Camp Urim</p>
        <p> Price: 100$</p>
        <button className='btn btn-primary' onClick={handleClick}> Add to Cart</button>
             </div>
         </div> ) ;
}
 
export default ProductCard;