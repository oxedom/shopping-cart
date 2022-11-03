import { useEffect } from 'react';
import './Cartitem.css'

const Cartitem = (props) => {
  const {  removeMethod } = props.props;
  const { name, count, price, src, } = props.props.e
 

  let total = parseInt(price.replace('$,"')) * count;

  const handleClick = () => {
    alert(name)
    removeMethod(name)
  }
  return (
    <div className="cart-item">
      <img alt={name} src={src} />
      <p> {name}</p>
      <p> {total}$ </p>
      <div className='plus-minus' > 
   
 
        <svg clip-rule="evenodd" onClick={handleClick} fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>

    
      
        <div className='amount-count'>
        <p> {count} </p>
        </div>




        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>

   
      </div>
   
    

 
    </div>
  );
};

export default Cartitem;
