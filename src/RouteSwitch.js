import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./comps/Homepage";
import ShoppingPage from "./comps/ShoppingPage";
import Navbar from "./comps/Navbar";
import Contact from "./comps/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;