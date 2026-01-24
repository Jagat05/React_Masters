"use client";

import { Forward, MessageCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(true);
    setCount(count + 1);
    if (liked === true) {
      setLiked(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-2xl h-80 w-50 bg-[#252728] gap-2">
        {/* Image */}
        <Image src="/Jagat.jpg" alt="Profile" width={150} height={70} />
        <div className="mr-38">
          {count > 0 && (
            <div className="flex items-center  text-white text-xs">
              <ThumbsUp className="h-3.5 w-3.5 bg-blue-600 rounded-full pl-0.5 " />
              {count}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 text-gray-400">
          {/* Like */}
          <div
            onClick={handleLike}
            className={`flex items-center gap-1 cursor-pointer ${
              liked ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <ThumbsUp className="h-3 w-3" />
            <p className="text-xs">Like</p>
          </div>

          {/* Comment */}
          <div className="flex items-center gap-1 cursor-pointer">
            <MessageCircle className="h-3 w-3" />
            <p className="text-xs">Comment</p>
          </div>

          {/* Share */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Forward className="h-3 w-3" />
            <p className="text-xs">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Like;
