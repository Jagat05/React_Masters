"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/useEffect.jpg"
        alt="useState background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col  bg-black/60 text-white ">
        <div className="relative z-10 flex items-center  h-full item px-6 md:px-16">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              useEffect Mastery
            </h1>

            <p className=" md:text-xl mb-8 text-xl text-gray-200">
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
                href="/rockpaperscissors"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                RockPaper
              </a>
              <a
                href="datafetchingaxios"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                DataFetchingAxios
              </a>
              <a
                href=""
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Comming soon!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
