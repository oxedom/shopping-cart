import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./comps/Homepage";
import ShoppingPage from "./comps/ShoppingPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;