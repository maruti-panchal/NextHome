// src/components/SuccessPage.js
import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-green-500">Success!</h1>
        <p className="text-lg mb-4">Your order has been placed successfully.</p>
        <Link
          to="/"
          className="inline-block py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
