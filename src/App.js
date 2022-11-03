import { useEffect, useState } from "react";
import styles from "./components/styles/styles.css";
import RouteSwitch from "./RouteSwitch";

function App() {
  const [cart, setCart] = useState([]);


  return (
    <div className="App">
      <RouteSwitch props={{ cart, setCart }}></RouteSwitch>
    </div>
  );
}

export default App;
