import React from "react";

const Product = (Productprops) => {
  const { product } = Productprops;

  return (
    <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="bg-gray-100 rounded-t-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xs uppercase tracking-wide text-gray-500">
          {product.category}
        </h2>

        <h2 className="text-lg text-black font-semibold mt-1">
          {product.name}
        </h2>

        <h3 className="text-sm text-gray-600 mt-1">{product.details}</h3>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg text-black font-bold">${product.price}</p>
          <p className="text-sm text-yellow-500 font-medium">
            ★ {product.rating}
          </p>
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
