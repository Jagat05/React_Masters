import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-tight">NIKE</h1>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-gray-500">
              Men
            </a>
            <a href="#" className="hover:text-gray-500">
              Women
            </a>
            <a href="#" className="hover:text-gray-500">
              Kids
            </a>
            <a href="#" className="hover:text-gray-500">
              Sale
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Search"
              className="outline-none placeholder-black 
              hover:placeholder-opacity-100
              focus:placeholder-opacity-100
              border-b border-black  "
            />

            <button className="relative text-sm font-medium hover:text-gray-500">
              <ShoppingCart />
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full px-1">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
