import { useState } from "react";
import { useEffect } from "react";


const Checkout = (props) => {
    const {cart} = props
    const [count, setCount] = useState([])



    function countDups (data)
    {
        const countsByNames = {};

        data.forEach(({ name}) => {
            countsByNames[name] = (countsByNames[name] || 0) + 1;


        });
        const finalArray = Object.entries(countsByNames)
        .map(([name, count,price,src,id]) => ({ name, count}))
        .sort((a, b) => b.count - a.count);

        return finalArray
    }



    useEffect(() => { setCount(countDups(cart)) }, [cart])

    return ( <section className="checkout-container"> 
    
     
        {count.map(e => <h1> {e.name}: {e.price}</h1>)}
    </section> );
}
export default Checkout;