import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./comps/Homepage";
import ShoppingPage from "./comps/ShoppingPage";
import Nav from "./comps/Nav";
import Contact from "./comps/Contact";
import ProductPage from './comps/ProductPage'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/shop/product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
