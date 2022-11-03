import { useState } from "react";
import styles from "./components/styles/styles.css";
import RouteSwitch from "./RouteSwitch";

function App() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (itemName) => {

    // const indexOfName = cart.findIndex(name => {return name === itemName})
    // const tempCart = cart 
    // tempCart.splice(indexOfName, 1)
    // setCart(tempCart)
 
  }

  return (
    <div className="App">
      <RouteSwitch props={{ cart, setCart, removeFromCart }}></RouteSwitch>
    </div>
  );
}

export default App;
