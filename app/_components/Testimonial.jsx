"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function BentoReview() {
  const reviewSectionRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const cardRefs = useRef([]);

  // Initialize GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: reviewSectionRef.current,
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

    // Individual card animations
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  });

  return (
    <section
      ref={reviewSectionRef}
      className="py-16 px-4 md:px-8 bg-emerald-100 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Write Review button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p
              ref={subtitleRef}
              className="text-lg mb-2 text-gray-800 uppercase font-medium"
            >
              Where Investment Meets Inspiration
            </p>
            <h2
              ref={titleRef}
              className="heading-secondary text-gray-900 font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl"
            >
              Voices From Our Happy Farm Owners
            </h2>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 md:px-6 rounded-md transition-all">
            Write Review
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Featured review - tall and spans 2 columns */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="md:col-span-2 md:row-span-2 bg-emerald-900 backdrop-blur-2xl rounded-2xl p-6 transition-all hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                <span className="text-gray-50 font-medium text-xl">P</span>
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-50">Prasanna</h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">
                    2 weeks ago
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-100 text-lg">
                "Karnasree Farm Meadows boasts an unbeatable reputation. Their
                return-on-investment schemes and other projects stand out as the
                best in the market."
              </p>
            </div>
            <p className="text-gray-100 text-lg">
              "The attention to detail in every aspect of their farm projects is
              exceptional. From the layout to the amenities, everything has been
              thoughtfully designed to create a premium farm ownership
              experience."
            </p>
            <div className="mt-4 md:mt-5 flex flex-wrap gap-2 ">
              <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                Best Investment
              </span>
              <span className="bg-emerald-900/40 backdrop-blur-lg text-emerald-100 text-xs px-3 py-1 rounded-full">
                Premium Quality
              </span>
            </div>
          </div>

          {/* Regular review */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="md:col-span-2 bg-emerald-900 backdrop-blur-2xl  rounded-2xl p-6 transition-all hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                <span className="text-gray-50 font-medium text-xl">G</span>
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-50">
                  Ganesh Reddy
                </h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">
                    1 month ago
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-100 text-lg">
                "Karnasree Farm Meadows offers hassle-free investments in prime
                lands around bengaluru, providing complete project details and
                cost transparency at every step."
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                Transparency
              </span>
              <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                Prime Location
              </span>
            </div>
          </div>

          {/* Third review */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="md:col-span-2 bg-emerald-900 backdrop-blur-2xl  rounded-2xl p-6 transition-all hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                <span className="text-gray-50 font-medium text-xl">A</span>
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-50">
                  Ashwini Gowda
                </h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">
                    3 weeks ago
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-100 text-lg">
                "Karnasree Farm Meadows offers hassle-free investments in prime
                lands around bengaluru, providing complete project details and
                cost transparency at every step."
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                Hassle-free
              </span>
              <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                Complete Details
              </span>
            </div>
          </div>

          {/* Wide review spanning 4 columns with image */}
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className="md:col-span-4 bg-emerald-900 backdrop-blur-2xl  rounded-2xl overflow-hidden transition-all hover:transform hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-6 ">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                    <span className="text-gray-50 font-medium text-xl">S</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-50">
                      Shantharam V H S
                    </h3>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-500 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-400 text-sm">
                        1 week ago
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-100 text-lg">
                    "We had an amazing visit to Karnasree Farm Meadows. The
                    project impressed us with its eco-friendly design, excellent
                    amenities, and prime location."
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                    Eco-friendly
                  </span>
                  <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                    Great Amenities
                  </span>
                  <span className="bg-emerald-900 text-emerald-100 text-xs px-3 py-1 rounded-full">
                    Prime Location
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoReview;
