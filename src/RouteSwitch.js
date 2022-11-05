import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import Checkout from "./components/Checkout/Checkout";

const RouteSwitch = (props) => {
  const { cart, setCart } = props.props;

  return (
    <BrowserRouter basename="/shopping-cart/" >
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShoppingPage />} />

        <Route
          exact
          path="shop/product/:id"
          element={<ProductPage props={{ setCart, cart }} />}
        />

        <Route path="contact" element={<Contact />} />
        <Route
          path="checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
