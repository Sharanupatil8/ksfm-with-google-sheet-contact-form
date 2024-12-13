"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.set(".navbar", { opacity: 0, y: -100 });

    gsap.set("h1", { opacity: 0, y: 100 });
    gsap.set("p", { opacity: 0, y: 100 });
    gsap.set("p", { opacity: 0 });
    gsap.set(".btn", { opacity: 0 });
    gsap.set(".card", { opacity: 0, yPercent: 100, transformOrigin: "top" });
    gsap.set(".right-leaf", { opacity: 0, x: 100 });
    gsap.set(".left-leaf", { opacity: 0, scale: 6, rotate: 45 });

    const tl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power1.inOut",
      },
    });

    tl.to(".left-leaf", {
      opacity: 1,
      scale: 1,
      duration: 1,
      rotate: 0,
    });
    tl.to(".right-leaf", {
      opacity: 1,
      x: 0,
      duration: 0.3,
    });
    tl.to(".right-leaf", {
      opacity: 1,
      x: 0,
      duration: 0.3,
    });
    tl.to(".navbar", {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });
    tl.to("h1", {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });
    tl.to("p", {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });
    tl.to(".btn", {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });
    tl.to(".card", {
      opacity: 1,
      yPercent: 0,
      duration: 0.3,
      stagger: 0.3,
    });
  }, []);

  return (
    <header className="h-screen  relative overflow-hidden px-4 md:px-12 py-6 w-full ">
      {/* Navbar section */}
      <div className="navbar">
        <Navbar />
      </div>

      <div className="flex  justify-end relative   flex-col pt-16 ">
        {/* Hero section text */}
        <div className="text-center max-w-7xl mx-auto relative">
          <div className="absolute top-0 left-leaf  -right-[100px]">
            <Image
              src="/assets/leave.png"
              alt=""
              width="100"
              height="200"
              className="  -rotate-45"
            />
          </div>
          <h1 className="text-gray-800  text-3xl md:text-5xl xl:text-6xl tracking-[-1px] font-bold text-center font-ptserif leading-[1.3]">
            Own Your Sustainable Farmland <br /> at KarNaSree Farm Meadows
          </h1>
          <p className="mt-4 text-gray-700 leading-[1.6] text-lg">
            Own a serene farmland at Kar Na Sree, where sustainable living meets
            well-being in harmony with nature.
          </p>
          <div className="mt-6 flex space-x-4 justify-center btn">
            <Link
              href="/"
              className=" text-lg flex space-x-2 items-center shadow-sm bg-emerald-700 text-white px-4 md:px-6 py-2"
            >
              Contact Now
            </Link>
            <Link
              href="/"
              className=" text-lg bg-amber-700 md:px-6 text-white px-4 py-2"
            >
              Watch Now
            </Link>
          </div>

          <div className="absolute right-leaf top-0 -left-[100px] w-full">
            <Image
              src="/assets/leave.png"
              alt=""
              width="100"
              height="200"
              className="  rotate-45"
            />
          </div>
        </div>
        {/* Hero section Cards */}
        <div className="grid grid-cols-5 gap-x-12 items-end -mt-8">
          <div className="card bg-emerald-700 z-10 relative px-5 rounded-xl py-5 h-[400px] w-full">
            <h2 className="flex z-20 flex-col pt-4 items-start text-white relative">
              <span className="text-white font-ptserif font-bold text-3xl md:text-5xl lg:text-8xl">
                400+
              </span>
              <span className="text-xl mt-3">
                Farmlands, Infinite Possibilities
              </span>
            </h2>
            <div className="absolute w-4/5 mx-auto text-center bottom-4 z-10 px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/10">
              <Link
                className="text-white font-medium font-poppins text-2xl"
                href=""
              >
                Discover Now <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
            <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
              <Image
                src="/assets/farmland.png"
                className="w-full h-full object-cover opacity-60"
                fill
                alt="farmland image representation"
              />
            </div>
          </div>

          {/* Other Cards */}
          <div className="bg-emerald-700 card h-[300px] z-10 relative px-5 rounded-xl w-full overflow-hidden">
            <h2 className="flex z-20 flex-col pt-4 items-start text-white relative">
              <span className="text-white font-ptserif font-bold text-3xl md:text-5xl lg:text-8xl">
                20+
              </span>
              <span className="text-xl mt-2">Worldclass Amenities</span>
            </h2>
            <div className="absolute w-4/5 z-50 mx-auto text-center bottom-4  px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/30">
              <Link
                className="text-white font-medium font-poppins text-2xl"
                href=""
              >
                Explore Now <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/assets/lake.webp"
                alt="Farmland Companies in bangalore near to the airport"
                width="300"
                height="300"
                className="object-cover w-full h-full opacity-50"
              />
            </div>
          </div>

          <div className="bg-emerald-700 card relative h-[200px] px-4 py-2 w-full rounded-xl overflow-hidden">
            <div className="absolute w-4/5 z-50 mx-auto text-center bottom-4  px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/30">
              <Link
                className="text-white font-medium font-poppins text-2xl"
                href=""
              >
                Book Now <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
            <h2 className="flex z-20 flex-col pt-3 items-start text-white relative">
              <span className="text-white font-ptserif font-bold text-3xl md:text-5xl ">
                Book Your Site Visit
              </span>
            </h2>

            <div className="h-40  w-40 bg-emerald-600 z-10 absolute -right-[40px] -bottom-[50px] rounded-full"></div>

            <div className="h-20 w-20  scale-150 bg-emerald-400 z-20 absolute -right-[20px] -bottom-[20px] rounded-full"></div>
          </div>

          <div className="bg-emerald-700 card h-[300px] px-5 py-2 w-full relative overflow-hidden rounded-xl">
            <h2 className=" z-20 text-white font-ptserif font-bold text-3xl md:text-5xl  pt-4 items-start  relative">
              <span className="text-4xl md:text-7xl block mb-1">90 </span>
              <span> Minutes from Airport</span>
            </h2>

            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/assets/airport.webp"
                alt="Farmland Companies in bangalore near to the airport"
                width="300"
                height="300"
                className="object-cover w-full h-full opacity-50"
              />
            </div>
          </div>

          {/* Villas Card */}
          <div className="bg-emerald-700 card relative z-10 px-5 rounded-xl py-5 h-[400px] w-full">
            <h2 className="flex z-20 relative flex-col pt-4 items-start text-white">
              <span className="text-white font-ptserif font-bold text-3xl md:text-5xl lg:text-8xl">
                1,2,3 BHK
              </span>
              <span className="text-xl mt-3">
                Farm Villas Including <br /> 45 Different plantations
              </span>
            </h2>
            <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
              <Image
                src="/assets/villa.jpeg"
                className="w-full h-full object-cover opacity-60"
                fill
                alt="farmland image representation"
              />
            </div>
            <div className="absolute w-4/5 mx-auto text-center bottom-4 z-10 px-3 py-3 rounded-2xl text-white backdrop-blur-lg bg-white/10 border border-white/10">
              <Link
                className="text-white font-medium font-poppins text-2xl"
                href=""
              >
                View Plans <span className="rotate-45">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
