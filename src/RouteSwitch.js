import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage"
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import Checkout from "./components/Checkout/Checkout";

const RouteSwitch = (props) => {
  const { cart, setCart } = props.props;


  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route
          path="/shop/product/:id"
          element={<ProductPage props={{ setCart }} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
