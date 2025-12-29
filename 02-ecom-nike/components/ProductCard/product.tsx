import React from "react";

type ProductType = {
  id: number;
  category: string;
  name: string;
  details: string;
  price: number;
  rating: number;
  image: string;
  stock: number;
  sizes: number[];
  color: string[];
  discount?: number;
};

const Product = ({ product }: { product: ProductType }) => {
  console.log("Product:", product);
  const [quantity, setQuantity] = React.useState(1);
  const increment = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
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
        <div className="flex justify-between items-center mt-2 space-x-2">
          <p className="text-sm text-gray-500 mt-2">
            {product.stock} items available
          </p>
          <div>
            <button
              onClick={increment}
              className="
    border-2 border-gray-400 rounded-lg 
    px-2 py-1 
    bg-white hover:bg-gray-100 
    shadow-md hover:shadow-lg 
    transition-all duration-200 
    text-lg font-semibold
  "
            >
              +
            </button>

            {/* {product.stock} */}
            <span className="mx-2">{quantity}</span>
            <button
              onClick={decrement}
              className="
    border-2 border-gray-400 rounded-lg 
    px-2.5 py-1
    bg-white hover:bg-gray-100 
    shadow-md hover:shadow-lg 
    transition-all duration-200 
    text-lg font-semibold
  "
            >
              -
            </button>
          </div>
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
