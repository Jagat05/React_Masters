import React from "react";
type messageProps = {
  name: string;
  message: string;
};
const Message = ({ name, message }: messageProps) => {
  return (
    <div>
      <div className="flex items-center px-3 py-3 rounded-lg hover:bg-[#2A2A2C] cursor-pointer">
        <div className="w-10 h-10 bg-gray-500 rounded-full mr-3" />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-400">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
