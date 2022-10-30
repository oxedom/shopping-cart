import { useState } from "react";
import styles from './comps/styles/styles.css'
import RouteSwitch from "./RouteSwitch";

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      
      <RouteSwitch props={{cart, setCart}}></RouteSwitch>
    </div>
  );
}

export default App;
