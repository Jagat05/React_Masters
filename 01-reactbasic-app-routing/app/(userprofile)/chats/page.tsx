import { EllipsisVertical, MessageSquarePlus, SearchIcon } from "lucide-react";
import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-1">
      <div className=" bg-[#1C1C1E] w-80 border-r border-gray-700">
        <div className="flex justify-between items-center px-4 h-14 border-b border-gray-700">
          <p className="text-lg font-medium">Chats</p>
          <div className="flex gap-3 text-gray-400">
            <MessageSquarePlus size={20} />
            <EllipsisVertical size={20} />
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="flex items-center gap-3 bg-[#2A2A2C] rounded-full px-4 py-2">
            <SearchIcon size={18} className="text-gray-400" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="px-2 space-y-1">
          <div className="flex items-center px-3 py-3 rounded-lg hover:bg-[#2A2A2C] cursor-pointer">
            <div className="w-10 h-10 bg-gray-500 rounded-full mr-3" />
            <div>
              <p className="text-sm font-medium">Jagat Joshi</p>
              <p className="text-xs text-gray-400">How are You ?</p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 rounded-lg hover:bg-[#2A2A2C] cursor-pointer">
            <div className="w-10 h-10 bg-gray-500 rounded-full mr-3" />
            <div>
              <p className="text-sm font-medium">Ram Joshi</p>
              <p className="text-xs text-gray-400">Lets meet tomorrow</p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 rounded-lg hover:bg-[#2A2A2C] cursor-pointer">
            <div className="w-10 h-10 bg-gray-500 rounded-full mr-3" />
            <div>
              <p className="text-sm font-medium">Ram Singh</p>
              <p className="text-xs text-gray-400">Sent a photo</p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 rounded-lg hover:bg-[#2A2A2C] cursor-pointer">
            <div className="w-10 h-10 bg-gray-500 rounded-full mr-3" />
            <div>
              <p className="text-sm font-medium">Sita Joshi</p>
              <p className="text-xs text-gray-400">Typing...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#161717]  flex flex-1 items-center justify-center text-gray-400">
        Select a chat to start messaging
      </div>
    </div>
  );
};

export default Chat;
