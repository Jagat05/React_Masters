"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const DataFetchingAxios = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products",
        );
        setProduct(res.data);
      } catch {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-center mt-8">Products</h1>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {product.map((item) => (
          <div
            key={item.id}
            className="
              w-72
              bg-gray-900
              rounded-3xl
              p-5
              flex flex-col
              gap-5
              border border-gray-800
              hover:scale-105
              hover:shadow-xl
              transition-transform duration-300
            "
          >
            {/* Image */}
            <div className="bg-white rounded-2xl h-56 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-center text-sm font-medium text-gray-200 line-clamp-2">
              {item.title}
            </h3>

            {/* Price */}
            <p className="text-center text-lg font-semibold">
              <span className="text-red-500">$</span>
              <span className="text-white">{item.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetchingAxios;
