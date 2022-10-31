import { useState } from "react";
import { useEffect } from "react";
import Cartitem from "./Cartitem";

const Checkout = (props) => {
  const { cart } = props;
  const [count, setCount] = useState([]);

  function countDups(data) {
    const countsByNames = {};
    let finalArray = [];

    data.forEach(({ name }) => {
      countsByNames[name] = (countsByNames[name] || 0) + 1;
    });
    const countArray = Object.entries(countsByNames)
      .map(([name, count, price, src, id]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    countArray.forEach((item) => {
      let missing = data.find((i) => i.name === item.name);
      finalArray.push({ ...missing, ...item });
    });

    return finalArray;
  }

  useEffect(() => {
    setCount(countDups(cart));
  }, [cart]);

  return (
    <section className="checkout-container">
      {count.map((e) => (
        <Cartitem key={e.name} props={e}></Cartitem>
      ))}
    </section>
  );
};
export default Checkout;
