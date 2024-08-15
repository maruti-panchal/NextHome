// src/components/CartPage.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  // Calculate the total price
  const totalPrice = cart
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-20 text-center"></h1>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-1">{product.location}</p>
                  <p className="text-gray-600 mb-1">
                    Beds: {product.number_of_beds}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Bathrooms: {product.number_of_bathrooms}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Dimensions: {product.dimensions}
                  </p>
                  <p className="text-gray-800 font-semibold mb-4">
                    Price: ${product.price}
                  </p>
                  <button
                    className="w-full py-2 px-4 bg-[#FF6400] text-white rounded-md hover:bg-[#e65900] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6400]"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Total: ${totalPrice}
            </h2>
            <button
              className="w-full py-2 px-4 bg-[#FF6400] text-white rounded-md hover:bg-[#e65900] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6400]"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
