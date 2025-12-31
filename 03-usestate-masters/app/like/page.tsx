"use client";

import { ThumbsUp } from "lucide-react";
import React, { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(true);
    if (liked === true) {
      setLiked(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <button
        onClick={handleLike}
        className={`flex items-center justify-center h-10 w-10 bg-gray-100 ${
          liked ? "text-blue-700" : "text-gray-700"
        }`}
      >
        <ThumbsUp />
      </button>
    </div>
  );
};

export default Like;
