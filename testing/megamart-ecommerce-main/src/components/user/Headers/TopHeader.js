import React from "react";
import {
  
  AiOutlinePhone,
  AiOutlineRadarChart,
} from "react-icons/ai";

export const TopHeader = () => {
  return (
    <div className="w-full h-6 bg-orange-600 text-white/70  mt-3 text-sm">
      <div className="container mx-auto flex h-full items-center justify-center sm:justify-between ">
        <p className="text-2xl text-white hidden sm:block">Welcome to Chirag Infosys!</p>
        <div className="flex space-x-2 ">
          <p className="flex items-center">
            <AiOutlinePhone /> <span className="text-2xl text-white ps-1">+91 98253 58858</span>
          </p>
          <p className="flex items-center">
            <AiOutlineRadarChart /> <span className="text-2xl text-white ps-1">Shop</span>
          </p>
        </div>
      </div>
    </div>
  );
};
