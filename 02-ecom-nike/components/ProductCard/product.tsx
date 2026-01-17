"use client";

import { useState, memo } from "react";

export type ProductType = {
  id: number;
  category: string;
  name: string;
  details: string;
  price: number;
  rating: number;
  image: string;
  stock: number;
  sizes: number[];
  colors: string[]; 
  discount?: number;
};

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, product.stock));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="bg-gray-100 rounded-t-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <h2 className="text-lg text-black font-semibold mt-1">
          {product.name}
        </h2>

        <p className="text-sm text-gray-600 mt-1">{product.details}</p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg text-black font-bold">
            ${product.price}
            {product.discount && (
              <span className="ml-2 text-sm text-green-600">
                -{product.discount}%
              </span>
            )}
          </p>

          <p className="text-sm text-yellow-500 font-medium">
            ★ {product.rating.toFixed(1)}
          </p>
        </div>

        {/* Stock & Quantity */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm text-gray-500">
            {product.stock} items available
          </p>

          <div className="flex items-center">
            <button
              onClick={increment}
              disabled={quantity >= product.stock}
              className="border-2 border-gray-400 rounded-lg px-2 py-1 bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition-all duration-200 text-lg font-semibold disabled:opacity-40"
            >
              +
            </button>

            <span className="mx-3 font-medium">{quantity}</span>

            <button
              onClick={decrement}
              disabled={quantity <= 1}
              className="border-2 border-gray-400 rounded-lg px-2.5 py-1 bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition-all duration-200 text-lg font-semibold disabled:opacity-40"
            >
              -
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default memo(Product);
