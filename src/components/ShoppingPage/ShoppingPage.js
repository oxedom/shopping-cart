import ProductCard from "../ProductCard/ProductCard";
import "./ShoppingPage.css";
import { useState } from "react";
import data from '../toy-api/data.js'

const ShoppingPage = () => {
  //All of the Products are stored in Shopping Page Comp
  const [products] = useState(data);


  return (
    //Rendering ALL PRODUCTS using MAP
    <div className="shoping-grid">
      {products.map((p) => (
        <ProductCard {...p} key={p.id} />
      ))}
    </div>
  );
};

export default ShoppingPage;
