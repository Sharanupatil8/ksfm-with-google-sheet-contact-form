import Image from "next/image";
import Link from "next/link";
import React from "react";

function Features() {
  return (
    <section className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-3 md:px-6">
      <div>
        <p className="text-lg uppercase text-emerald-600 font-medium">
          Farm Living Redefined
        </p>
        <h2 className="heading-secondary mb-4 md:mb-6 lg:mb-8  text-gray-800 font-ptserif font-bold text-5xl lg:text-6xl">
          Experience the Best of Farm Living
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 ">
        <div className="features-image relative">
          <div className="card bg-emerald-900/30 z-10 relative px-5 rounded-xl py-5 h-full w-full">
            <h2 className="flex z-20 flex-col pt-4  text-white relative">
              <span className="text-white font-ptserif font-bold text-5xl lg:text-8xl">
                900+
              </span>
              <span className="text-xl mt-3">
                Farmlands, Infinite Possibilities
              </span>
            </h2>
            <div className="absolute w-4/5 mx-auto text-center bottom-4 z-10 px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/10">
              <Link
                className="text-white font-medium font-poppins text-xl"
                href="/projects"
              >
                Discover Now <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="features-image ">
          <div className="bg-emerald-900/30 card h-full z-10 relative px-5 rounded-xl w-full overflow-hidden">
            <h2 className="flex z-20 flex-col pt-4 items-start text-white relative">
              <span className="text-white font-ptserif font-bold text-5xl lg:text-8xl">
                25+
              </span>
              <span className="text-xl mt-2">Worldclass Amenities</span>
            </h2>
            <div className="absolute w-4/5 z-50 mx-auto text-center bottom-4  px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/30">
              <Link
                className="text-white font-medium font-poppins text-xl"
                href="/amenities"
              >
                Explore Now <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="features-image ">
          <div className="bg-emerald-900/30 card h-full px-5 py-2 w-full relative overflow-hidden rounded-xl">
            <h2 className=" z-20 text-white font-ptserif font-bold text-5xl  pt-4 items-start  relative">
              <span className="text-4xl md:text-7xl block mb-1">90 </span>
              <span> Minutes from Airport</span>
            </h2>
          </div>
        </div>
        <div className="features-image ">
          <div className="bg-emerald-900/30 card relative z-10 px-5 rounded-xl py-5 h-full w-full">
            <h2 className="flex z-20 relative flex-col pt-4 items-start text-white">
              <span className="text-white font-ptserif font-bold text-5xl lg:text-7xl">
                1,2,3 BHK
              </span>
              <span className="text-xl mt-2">
                Customizabale Farm Villas Including 55 Different plantations
              </span>
            </h2>

            <div className="absolute w-4/5 mx-auto text-center bottom-4 z-10 px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/10">
              <Link
                className="text-white font-medium font-poppins text-xl"
                href="/projects"
              >
                View Plans <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
