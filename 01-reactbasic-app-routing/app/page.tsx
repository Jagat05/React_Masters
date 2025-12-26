"use client";

import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 px-5 font-sans">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl mt-12">
        {/* Logo */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
          <Image
            src="https://cdn.dribbble.com/userupload/41573963/file/original-ac839f228c8ebe7139e7a9cfcae7d3fa.png?resize=400x0"
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
            LOGIN
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Namaskar 🙏 Welcome back
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-white text-base
                      bg-linear-to-r from-indigo-500 to-indigo-700
                       shadow-lg shadow-indigo-500/30
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-xl
                       active:scale-95
                       disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Sign In
        </button>
        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-white text-base
                      bg-linear-to-r from-indigo-500 to-indigo-700
                       shadow-lg shadow-indigo-500/30
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-xl
                       active:scale-95
                       disabled:opacity-70 disabled:cursor-not-allowed"
        ></button>
        <div>
          <a
            href="register"
            className="text-indigo-600 font-extrabold hover:underline"
          >
            Signup
          </a>
          <a
            href="register"
            className="text-indigo-600 font-extrabold hover:underline"
          >
            SignIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

