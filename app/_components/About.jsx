"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  useGSAP(() => {
    // Manually split text into spans
    const heading = document.querySelector(".heading-secondary");
    const text = heading.textContent;
    heading.innerHTML = text
      .split("")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    const gridItems = gsap.utils.toArray(".grid-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 20%",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    tl.from(".text-above-heading", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        ".char",
        {
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .from(
        gridItems,
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );
  });

  return (
    <section className="about-section my-8 md:my-16 py-8 bg-emerald-950 about-image sticky top-0">
      <div className="max-w-7xl mx-auto container rounded-md px-4 md:px-8 py-8 md:py-16">
        <div className="text-white">
          <p className="text-lg mt-1 text-above-heading">
            We Bring Back Farmland Living
          </p>
          <h2 className="heading-secondary font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
            KarNaSree Farm Meadows
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-x-0 md:gap-x-8 gap-y-8 md:gap-y-12 px-3 md:px-0 mt-8 md:mt-12">
          <div className="grid-item col-span-12 md:col-span-6 lg:col-span-5 relative flex flex-col rounded-md shadow-md bg-emerald-700 px-3 md:px-6 py-4 md:py-8">
            <div className="self-start">
              <Image
                src="/assets/white-quote.png"
                className="h-10 mb-4 w-full object-contain"
                width="100"
                height="200"
                alt="karnasree farms"
              />
            </div>
            <p className="text-gray-50">
              Imagine a life where your backyard is a boundless green canvas,
              and your investment grows as naturally as the crops around you.
              KarNaSree Farm Meadows isn't just real estate; it's a
              revolutionary lifestyle that transforms how you live, invest, and
              connect with the world.
            </p>
          </div>
          <div className="grid-item col-span-12 md:col-span-4 lg:col-span-2 backdrop-blur-sm relative bg-emerald-800 rounded-md shadow-md">
            <Image
              src="/assets/plan1.png"
              alt="plant"
              height="400"
              width="200"
              className="w-auto  h-full object-cover absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="grid-item col-span-12 md:col-span-6 lg:col-span-5 relative rounded-md shadow-md bg-gray-200 px-3 md:px-6 py-4 md:py-8">
            <h3 className="font-ptserif mb-4 text-2xl md:text-3xl font-bold">
              400+ Farmlands. <br /> Infinite Possibilities
            </h3>
            <p className="text-gray-700">
              We're not selling land. We're offering a movement. A chance to
              break free from concrete jungles and plant roots in something
              real. Our meticulously designed farmlands are your ticket to:
            </p>
            <div className="absolute bottom-[12px] right-[16px]">
              <Image
                src="/assets/green-quote.png"
                className="h-full w-full object-contain"
                width="100"
                height="200"
                alt="karnasree farms"
              />
            </div>
          </div>
          <div className="grid-item col-span-12 md:col-span-6 lg:col-span-8 rounded-md shadow-md px-3 md:px-6 py-4 md:py-8 text-gray-50 bg-amber-800">
            <h3 className="text-2xl uppercase mb-6">
              Your plot, Your purpose, Your revolution starts here.
            </h3>
            <ul className="flex flex-col space-y-2">
              <li>&#10003; Sustainable wealth creation</li>
              <li>&#10003; Personal agricultural adventures</li>
              <li>&#10003; A radical departure from traditional investments</li>
              <li>&#10003; A community of forward-thinking landowners</li>
            </ul>
            <p className="mt-6">
              Regenerate. Reimagine. Return to What Matters. This isn&apos;t
              just about owning land. It&apos;s about being part of an ecosystem
              that breathes, grows, and thrives. Every plot is a statement—a
              commitment to environmental stewardship, personal growth, and a
              future where prosperity and nature walk hand in hand.
            </p>
          </div>
          <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4 rounded-md shadow-md">
            <div className="relative">
              <Image
                src="/assets/entrance.png"
                alt="best farmland in bangalore"
                width="500"
                height="300"
                className="h-4/5 w-full relative z-10 rounded-md object-cover"
              />
              <div className="z-20 bg-gray-800 bg-opacity-35 h-4/5 w-full absolute top-0 left-0"></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full hover:cursor-pointer"
                onClick={openModal}
              >
                <HiMiniPlay className="h-16 w-16 rounded-full animate-bounce bg-gray-50 p-3" />
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="H-UKr4d4GsI"
          onClose={() => setIsOpen(false)}
        />
      </div>
    </section>
  );
}

export default About;
