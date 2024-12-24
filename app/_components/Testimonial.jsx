"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
  const testimonialRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const cardRefs = useRef([]);

  // Initialize GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animate Title and Subtitle from bottom
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    }).from(
      subtitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 1,
      },
      "-=0.5"
    );

    // Stagger Cards from left
    gsap.from(cardRefs.current, {
      opacity: 0,
      x: -100,
      stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 75%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <section
      ref={testimonialRef}
      className="my-8 md:my-16 py-8 relative overflow-hidden bg-emerald-50"
    >
      <div className="max-w-7xl mx-auto container rounded-md px-4 md:px-8 py-8 md:py-16">
        <div className="text-center ">
          <p
            ref={subtitleRef}
            className="text-lg mt-1 text-gray-500 text-above-heading"
          >
            Where Investment Meets Inspiration
          </p>
          <h2
            ref={titleRef}
            className="heading-secondary font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl"
          >
            Voices From Our Happy Farm Owners
          </h2>
        </div>

        <div className="mt-6 md:mt-12 flex space-x-0 md:space-x-8 flex-wrap justify-center">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="w-[280px] px-3 md:px-6 py-3 md:py-6 border-gray-500 bg-white/5 relative flex flex-col space-y-3 backdrop-blur-2xl rounded-md border shadow-lg"
          >
            <Image
              src="/assets/green-quote.png"
              alt="white quote png image"
              width="60"
              height="60"
              className="h-15 w-15 object-cover"
            />
            <p className="text-gray-500">
              Karnasree Farm Meadows boasts an unbeatable reputation. Their
              return-on-investment schemes and other projects stand out as the
              best in the market.
            </p>
            <h3 className="text-gray-600 font-medium"> - Prasanna</h3>
          </div>
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="w-[280px] px-3 md:px-6 py-3 md:py-6 border-gray-500 bg-white/5 relative flex flex-col space-y-3 backdrop-blur-2xl rounded-md border"
          >
            <Image
              src="/assets/green-quote.png"
              alt="white quote png image"
              width="60"
              height="60"
              className="h-15 w-15 object-cover"
            />
            <p className="text-gray-500">
              Karnasree Farm Meadows offers hassle-free investments in prime
              lands around Bangalore, providing complete project details and
              cost transparency at every step.
            </p>
            <h3 className="text-gray-600 font-medium"> - Ganesh Reddy</h3>
          </div>
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="w-[280px] px-3 md:px-6 py-3 md:py-6 border-gray-500 bg-white/5 relative flex flex-col space-y-3 backdrop-blur-2xl rounded-md border"
          >
            <Image
              src="/assets/green-quote.png"
              alt="white quote png image"
              width="60"
              height="60"
              className="h-15 w-15 object-cover"
            />
            <p className="text-gray-500">
              Karnasree Farm Meadows offers hassle-free investments in prime
              lands around Bangalore, providing complete project details and
              cost transparency at every step.
            </p>
            <h3 className="text-gray-600 font-medium"> - Ashwini Gowda</h3>
          </div>
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className="w-[280px] px-3 md:px-6 py-3 md:py-6 border-gray-500 bg-white/5 relative flex flex-col space-y-3 backdrop-blur-2xl rounded-md border"
          >
            <Image
              src="/assets/green-quote.png"
              alt="white quote png image"
              width="60"
              height="60"
              className="h-15 w-15 object-cover "
            />
            <p className="text-gray-500">
              We had an amazing visit to Karnasree Farm Meadows. The project
              impressed us with its eco-friendly design, excellent amenities,
              and prime location.
            </p>
            <h3 className="text-gray-600 font-medium"> - Shantharam V H S</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
