"use client";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);

  useEffect(() => {
    if (num > prevNum) {
      alert("Incremented");
    } else if (num < prevNum) {
      alert("Decremented");
    }

    setPrevNum(num);
  }, [num]);

  const increment = () => setNum(num + 1);

  const decrement = () => {
    if (num > 0) setNum(num - 1);
  };

  const reset = () => setNum(0);

  return (
    <div className="min-h-screen text-black w-full flex items-center justify-center">
      <div className="bg-white h-80 w-60 flex flex-col items-center justify-center rounded-2xl">
        <p className="text-3xl font-bold">Counter</p>

        <span className="flex items-center justify-center text-white font-bold h-15 w-59 bg-gray-800 rounded-2xl mt-6">
          {num}
        </span>

        <div className="flex gap-4 p-5 mt-6">
          <button
            onClick={increment}
            className="bg-black text-white h-10 w-20 rounded-2xl hover:bg-gray-800"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="bg-black text-white h-10 w-20 rounded-2xl hover:bg-gray-800"
          >
            -
          </button>
        </div>

        <button
          onClick={reset}
          className="bg-black text-white h-10 w-30 rounded-2xl hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
