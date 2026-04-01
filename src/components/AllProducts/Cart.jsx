import { ShoppingBag } from "lucide-react";
import React from "react";

const Cart = ({ cartItem, handleRemoveFromCart, handleCheckout }) => {
  return (
    <div className="container mx-auto my-7 p-4 border border-neutral-100 rounded-2xl shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="bg-neutral-50 p-10 rounded-full mb-8 shadow-sm">
            <ShoppingBag
              size={120}
              className="text-neutral-200"
              strokeWidth={1}
            />
          </div>
          <h3 className="text-3xl font-extrabold text-[#101727]">
            Your cart is empty
          </h3>
          <p className="text-[#627382] mt-4 text-lg leading-relaxed">
            Start exploring to find the perfect tools for your needs!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 border border-neutral-200 rounded-full bg-white">
                  <img className="h-8 w-8" src={item.image} alt={item.name} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-neutral-500 line-clamp-1 max-w-xs">
                    ${item.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="btn btn-ghost border-0 text-error hover:bg-error/10 hover:text-error rounded-[30px]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-extrabold text-primary">
                ${cartItem.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary w-full border-0 text-white rounded-full font-bold bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6] text-lg border-none"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;