import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative h-[90vh] w-full bg-[url('https://i.pinimg.com/736x/37/cd/93/37cd9342417c0c486ae065bb5f6ebf82.jpg')] bg-cover bg-center">
        {/* <!-- Overlay --> */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* <!-- Content --> */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-16">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              JUST DO IT. BETTER.
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Built for speed, comfort, and everyday performance. Gear up with
              the latest Nike drops.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Shop New Arrivals
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Shop Men
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
