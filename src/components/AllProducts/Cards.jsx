import React, { use } from "react"; 
import Card from "./Card";

const Cards = ({ dataPromise, handleAddToCart, cartItem }) => {
  
  const products = use(dataPromise);

  return (
    <div className="container mx-auto p-8 bg-[#fdfdfd] rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
        products?.map((item) => (
          <Card 
          key={item.id} 
          item={item}
          handleAddToCart={handleAddToCart}
          cartItem={cartItem}
        />
        ))
        }
      </div>
    </div>
  );
};

export default Cards;