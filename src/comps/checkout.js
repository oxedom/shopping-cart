import { useState } from "react";
import { useEffect } from "react";


const Checkout = (props) => {
    const {cart} = props
    const [count, setCount] = useState([])

    // function findByPropName (array,name) {
    //     let result = {}
    //     array.forEach(obj => {

    //         if(obj['name'] === name ) { result = obj
    //             console.log(obj);
    //         return obj}
        
    // })}

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

    return ( <section> 
        <h1> Hello from Checkout </h1>
        {console.log(count)}
        {count.map(e => <h1> {e.name}: {e.price}</h1>)}
    </section> );
}
export default Checkout;