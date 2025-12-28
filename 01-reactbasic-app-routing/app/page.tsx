"use client";

import { MousePointerClick } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 px-5 font-sans">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl mt-12">
        {/* Logo */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
          <Image
            src="/Owl.png"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        {/* Header */}
        <div className="bg-slate-900 pt-16 pb-8 text-center rounded-t-3xl">
          <h1 className="text-white text-2xl font-extrabold tracking-[4px]">
            Welcome to React js !
          </h1>
        </div>
        <div className="flex justify-between items-center px-9 my-10">
          <a
            href="/register"
            className="text-indigo-600 font-extrabold hover:underline"
          >
            <div
              className="w-full p-4 rounded-xl font-bold text-white text-base
                      bg-linear-to-r from-indigo-500 to-indigo-700
                       shadow-lg shadow-indigo-500/30
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-xl
                       active:scale-95
                       disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {" "}
              Signup
            </div>
          </a>
          <a href="/login">
            <div
              className="w-full p-4 rounded-xl font-bold text-white text-base
                      bg-linear-to-r from-indigo-500 to-indigo-700
                       shadow-lg shadow-indigo-500/30
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-xl
                       active:scale-95
                       disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {" "}
              SignIn
            </div>
          </a>
        </div>{" "}
        <a
          href="/chats"
          className="text-indigo-600 font-extrabold hover:underline "
        >
          <div className="flex items-center justify-center">
            {" "}
            Chat Section
            <MousePointerClick />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
