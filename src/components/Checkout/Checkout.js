import data from '../toy-api/data';
import Cartitem from "../Cartitem/Cartitem"
import { useState, useEffect } from 'react';

const Checkout = (props) => {

  const { cart, setCart } = props;
  const [cartItems, setCartItems] = useState([]);

  const objectCounter = (objectPara) => 
  {
    const counts = {};
    objectPara.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts
  }


  const removeDups = array => [...new Set(array)]

  const getItemData = (array) => 
  {
    let result = []
    array.forEach(item => 
      {
        
        let searchedItem = data.find(d => d.name === item)
        result.push(searchedItem)
      })
      return result
  }

  useEffect((e) => {
    //Counts the amounts of dups in the cart array 
    let itemsCount = objectCounter(cart)
    //Removes Dups from Array and Gets there data from the TOY API
    let items = getItemData(removeDups(cart))

    //Merges the Two Objects
    for (const property in itemsCount) {
      items.forEach(i => {
        if(i['name'] === property ) {
          i.count = itemsCount[property]
        } 
      })
    }
    setCartItems(items)
  }, [cart])




  return (
    <section className="checkout-container">
      {cartItems.map((e) => (
        <Cartitem  key={e.name} props={{e, setCart, cart}}></Cartitem>
      ))}
    </section>
  );
};
export default Checkout;
