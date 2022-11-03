import data from '../toy-api/data';
import Cartitem from "../Cartitem/Cartitem"

const Checkout = (props) => {

  const { cart, setCart } = props;



  return (
    <section className="checkout-container">
      {cart.map((e) => (
        <Cartitem  key={e.name} props={{e, setCart, cart}}></Cartitem>
      ))}
    </section>
  );
};
export default Checkout;
