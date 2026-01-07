"use client";
import React, { useState } from "react";

const Toggelbar = () => {
  const [selected, setSelected] = useState("All");
  const buttons = [
    { id: 1, name: "All" },
    { id: 2, name: "Programming" },
    { id: 3, name: "Music" },
    { id: 4, name: "Movies" },
  ];
  return (
    <div>
      <div className="space-x-3 mt-2">
        {buttons.map((items) => {
          return (
            <button
              key={items.id}
              onClick={() => setSelected(items.name)}
              className={`${
                selected === items.name
                  ? "bg-white text-black"
                  : "bg-[#272727] "
              } p-2 rounded-sm font-bold `}
            >
              {items.name}{" "}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Toggelbar;
