import ProductCard from "./ProductCard";
import ProductMenu from "./ProductMenu";
import { useState } from "react";

const ShoppingPage = () => {
  const [products, setProducts] = useState([
    {
      name: "Camp Urim",
      id: 1,
      price: "100$",
      src: "https://i.imgur.com/YsBEInJ.jpg",
    },
    {
      name: "Tech Sounds",
      id: 2,
      price: "100$",
      src: "https://i.imgur.com/5ZVx6jF.jpg",
    },
    {
      name: "Wedding Dance",
      id: 3,
      price: "100$",
      src: "https://i.imgur.com/igiCdCS.jpg",
    },
    {
      name: "Memory field",
      id: 4,
      price: "100$",
      src: "https://i.imgur.com/k8uLFr1.jpg",
    },
    {
      name: "White Duna",
      id: 5,
      price: "130$",
      src: "https://i.imgur.com/Hib75LA.jpg",
    },
    {
      name: "Desert Hound",
      id: 6,
      price: "100$",
      src: "https://i.imgur.com/eOefyNK.jpg",
    },
    {
      name: "Electric Love",
      id: 7,
      price: "30$",
      src: "https://i.imgur.com/QNp04rN.jpg",
    },
    {
      name: "Up North ",
      id: 8,
      price: "100$",
      src: "https://i.imgur.com/cFwxzRr.jpg   ",
    },
    {
      name: "Desert Memorial",
      id: 9,
      price: "100$",
      src: "https://i.imgur.com/aUzcWgR.jpg",
    },
    {
      name: "Watermelon Madness",
      id: 10,
      price: "100$",
      src: "https://i.imgur.com/wlf3iqn.jpg",
    },
    {
      name: "School Afternoons",
      id: 11,
      price: "100$",
      src: "https://i.imgur.com/aQdMqtY.jpg",
    },

  ]);
  return (
    <div className="shoping-grid">
      {products.map((p) => (
        <ProductCard {...p} />
     
      ))}
    </div>
    
  );
};

export default ShoppingPage;
