"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { HiCheck } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const sectionRef = useRef(null);
  const headingWrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // Custom text splitting
      const heading = headingWrapperRef.current.querySelector("h2");
      const words = heading.textContent.split(" ");
      heading.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden">
        <span class="inline-block" style="transform: translateY(100%)">
          ${word}
        </span>
      </span>`
        )
        .join(" ");

      const chars = heading.querySelectorAll("span span");

      // Create a timeline for smoother animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingWrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Add animations to timeline
      tl.to(chars, {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
      }).from(
        headingWrapperRef.current.querySelector("p"),
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          duration: 1.2,
          y: 50,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        });
      });
    },
    { scope: sectionRef }
  ); // Scope animations to the section

  return (
    <section ref={sectionRef} className="my-8 md:my-16 py-8">
      <div className="max-w-7xl mx-auto container rounded-md px-4 md:px-8 py-8 md:py-16">
        <div className="text-white" ref={headingWrapperRef}>
          <p className="text-lg mt-1 text-above-heading text-gray-500">
            Where Investment Meets Inspiration
          </p>
          <h2 className="heading-secondary text-gray-700 font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
            Why Choose KarNaSree Farm Meadows
          </h2>
        </div>

        <div className="relative space-y-6 md:space-y-12">
          {/* First Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-12 bg-emerald-200 rounded-md overflow-hidden"
          >
            <div className="p-3 md:p-8 min-h-[400px] flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl ps-0 font-bold font-ptserif">
                Your Eco-Friendly Haven
              </h3>
              <ul className="flex flex-col space-y-3">
                <li className="mt-4 flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Nature's Embrace:</strong> Immerse yourself in the
                    beauty of nature with spacious gardens and lush plantations
                  </span>
                </li>
                <li className="flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Sustainable Living:</strong> Immerse yourself in the
                    beauty of nature with spacious gardens and lush plantations
                  </span>
                </li>
                <li className="flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Luxurious Comfort:</strong> Indulge in modern
                    amenities, elegant interiors, and comfortable living spaces.
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/assets/project1.jpg"
                alt="karnasree farms"
                width={400}
                height={400}
                className="h-[400px] w-full shadow-lg rounded-t-lg md:rounded-t-none md:rounded-r-lg object-cover"
              />
            </div>
          </div>

          {/* Second Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="grid grid-cols-1 md:grid-cols-2 bg-amber-200 rounded-md overflow-hidden"
          >
            <div className="shadow-lg order-first">
              <Image
                src="/assets/basketballcourt.jpg"
                alt="karnasree farms"
                width={400}
                height={400}
                className="h-[400px] w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover"
              />
            </div>
            <div className="p-3 md:p-8 min-h-[400px] flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl ps-0 font-bold font-ptserif">
                A Smart Investment
              </h3>
              <ul className="flex flex-col space-y-3">
                <li className="mt-4 flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>High ROI Potential: </strong> Reap the rewards of
                    significant returns from valuable sandalwood and teakwood
                    plantations.
                  </span>
                </li>
                <li className="flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Passive Income: </strong> Generate steady rental
                    income from your villa and agricultural produce
                  </span>
                </li>
                <li className="flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Affordable Luxury: </strong> Own your dream villa
                    with flexible payment plans and competitive pricing.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Card */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="grid grid-cols-1 md:grid-cols-2 bg-emerald-200 rounded-md overflow-hidden"
          >
            <div className="p-3 md:p-8 min-h-[400px] flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl ps-0 font-bold font-ptserif">
                Key Features and Benefits
              </h3>
              <ul className="flex flex-col space-y-3">
                <li className="mt-4 flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Full Land Ownership:</strong> Enjoy complete
                    ownership of your land and villa
                  </span>
                </li>
                <li className="flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Exclusive Crop Share:</strong> Reap the benefits of
                    your own harvest.
                  </span>
                </li>
                <li className="flex space-x-2 items-start">
                  <span>
                    <HiCheck className="h-6 w-6" />
                  </span>
                  <span>
                    <strong>Vaastu-Compliant Design: </strong> Harmonize your
                    living space with positive energy
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/assets/plan1.png"
                alt="karnasree farms"
                width={400}
                height={400}
                className="h-[400px] w-full rounded-t-lg md:rounded-t-none md:rounded-r-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
