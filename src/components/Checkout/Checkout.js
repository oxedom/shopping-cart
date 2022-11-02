import { useState } from "react";
import { useEffect } from "react";
import data from '../toy-api/data';
import Cartitem from "../Cartitem/Cartitem"

const Checkout = (props) => {

  const { cart } = props;
  const [count, setCount] = useState([]);

 
const objectCounter = (objectPara) => 
{
  const counts = {};
  objectPara.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  return counts
}

  useEffect(() => {
    setCount(objectCounter(cart))
    getItemData(cart)
    
  } ,[cart])

  const removeDups = array => [...new Set(array)]

  const getItemData = (array) => 
  {
    let result = []
    array.forEach(item => 
      {
        let searchedItem = data.find(d => d.name = item)
        result.push(searchedItem)
      })
  }

 

 

  return (
    <section className="checkout-container">
      {/* {count.map((e) => (
        <Cartitem key={e.name} props={e}></Cartitem>
      ))} */}
    </section>
  );
};
export default Checkout;
