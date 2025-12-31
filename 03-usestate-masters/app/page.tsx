"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/useState.png"
        alt="useState background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col  bg-black/40 text-white ">
        <div className="relative z-10 flex items-center  h-full item px-6 md:px-16">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              useState Mastery
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Here&apos;s the mini project to master it!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/counter"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Counter App
              </a>
              <a
                href="like"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Like
              </a>
              <a
                href="/colorchanger"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                ColorChanger
              </a>
              <a
                href="dice"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Dice Game
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
