import MainSideBar from "@/component/Sidebar/page";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <MainSideBar />
      <div className="flex flex-1"> {children}</div>
    </div>
  );
};

export default layout;
