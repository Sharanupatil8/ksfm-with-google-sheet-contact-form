"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CtaButton from "./CtaButton";
import { HardDriveDownload } from "lucide-react";
import { HiArrowDown } from "react-icons/hi2";

function Hero() {
  useGSAP(() => {
    gsap.set([".navbar", "h1", ".hero-subtext", ".btn", ".card"], {
      opacity: 0,
      y: 100,
    });
    gsap.set(".right-leaf", { opacity: 0, x: 100 });
    gsap.set(".left-leaf", { opacity: 0, scale: 6, rotate: 45 });

    gsap
      .timeline({ defaults: { duration: 1, ease: "power1.inOut" } })

      .to(
        ["h1", ".hero-subtext", ".btn"],
        { opacity: 1, y: 0, stagger: 0.1 },
        "-=0.4"
      )
      .to(".card", { opacity: 1, y: 0, stagger: 0.1 }, "-=0.3");
  }, []);

  return (
    <header className="hero-image h-dvh overflow-hidden relative px-4 md:px-12 pt-6 w-full bg-emerald-100">
      <div className="absolute inset-0">
        <video
          src="/hero-video_2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          poster="/fallback-image.jpg"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      </div>
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl xl:text-[84px] tracking-[-1px] font-bold font-ptserif leading-[1.3]">
          Own Your Sustainable Farmvillas
        </h1>
        <p className="mt-3 md:mt-4 hero-subtext text-gray-100 leading-[1.6] text-lg max-w-5xl">
          Own a serene farmvillas at Kar Na Sree, where sustainable living meets
          well-being in harmony with nature.
        </p>
        <div className="mt-6 flex space-x-4 btn">
          <CtaButton />
          <Link
            href="https://drive.google.com/drive/folders/1ia7TbgcEb_qvsWVUSG_dDWSrTersHebr?usp=sharing"
            target="_blank"
            className="text-lg flex items-center bg-amber-700 text-white px-6 py-2 rounded-md shadow-md"
          >
            <span>
              <HiArrowDown className="me-1" />
            </span>
            <p> Download Brochure</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;
