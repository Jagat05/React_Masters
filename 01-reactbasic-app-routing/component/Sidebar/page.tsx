import {
  CircleDotDashed,
  MessageCircleCode,
  MessageSquareText,
  Phone,
  Settings,
  Users,
} from "lucide-react";
import React from "react";

const MainSideBar = () => {
  return (
    <div>
      <div className=" bg-[#29282B] w-16 flex flex-col h-screen justify-between items-center py-2 text-gray-400">
        <div className="flex flex-col items-center gap-2 p-4">
          <div className="relative group flex items-center">
            {/* Icon */}
            <a
              href="/chats"
              className="p-3 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              <MessageSquareText
                size={20}
                className="text-gray-400 group-hover:text-white"
              />
            </a>

            {/* Tooltip */}
            <span
              className="absolute left-full ml-1 top-1/2 -translate-y-1/2
                   bg-gray-800 text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none"
            >
              Chats
            </span>
          </div>
          <div className="relative group flex items-center">
            {/* Icon */}
            <a
              href="/calls"
              className="p-3 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              <Phone
                size={20}
                className="text-gray-400 group-hover:text-white"
              />
            </a>

            {/* Tooltip */}
            <span
              className="absolute left-full ml-1 top-1/2 -translate-y-1/2
                   bg-gray-800 text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none"
            >
              Calls
            </span>
          </div>
          <div className="relative group flex items-center">
            {/* Icon */}
            <a
              href="/status"
              className="p-3 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              <CircleDotDashed
                size={20}
                className="text-gray-400 group-hover:text-white"
              />
            </a>

            {/* Tooltip */}
            <span
              className="absolute left-full ml-1 top-1/2 -translate-y-1/2
                   bg-gray-800 text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none"
            >
              Status
            </span>
          </div>
          <div className="relative group flex items-center">
            {/* Icon */}
            <a
              href="/channels"
              className="p-3 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              <MessageCircleCode
                size={20}
                className="text-gray-400 group-hover:text-white"
              />
            </a>

            {/* Tooltip */}
            <span
              className="absolute left-full ml-1 top-1/2 -translate-y-1/2
                   bg-gray-800 text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none"
            >
              Channels
            </span>
          </div>
          <div className="relative group flex items-center">
            {/* Icon */}
            <a
              href="/communities"
              className="p-3 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              <Users
                size={20}
                className="text-gray-400 group-hover:text-white"
              />
            </a>

            {/* Tooltip */}
            <span
              className="absolute left-full ml-1 top-1/2 -translate-y-1/2
                   bg-gray-800 text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none"
            >
              Communities
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-6 border-t">
          <Settings size={20} />
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
