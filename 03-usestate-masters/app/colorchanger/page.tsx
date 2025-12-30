"use client";
import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("#000000");

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white shadow-lg p-8 rounded-3xl flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-800">Color Changer</h1>

        <div
          className="h-32 w-32 rounded-full shadow-2xl border-4 border-gray-200"
          style={{ backgroundColor: color }}
        ></div>

        <p className="text-gray-700 font-semibold text-lg">
          Current Color: {color}
        </p>

        <button
          onClick={generateRandomColor}
          className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition-colors"
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
