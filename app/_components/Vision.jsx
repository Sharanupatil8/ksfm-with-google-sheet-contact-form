"use client"; // Important for Next.js

import React, { useEffect, useRef } from "react";
import { Eye, Target, ShieldCheck } from "lucide-react"; // Import icons
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisionMissionValues() {
  const sectionsRef = useRef(null);
  const leftRef = useRef(null);

  const sections = [
    {
      title: "Vision",
      content:
        "Our vision at Karnasree Farm Meadows is to reconnect people with nature by helping them fulfill their dream of owning sustainable farmland.",
      icon: (
        <Eye className="absolute top-4 right-4 text-emerald-900 opacity-15 w-16 h-16" />
      ),
    },
    {
      title: "Mission",
      content:
        "We are committed to inspiring individuals to invest in greener pastures and supporting them in leading a fulfilling life in a pristine natural habitat.",
      icon: (
        <Target className="absolute top-4 right-4 text-emerald-900 opacity-15 w-16 h-16" />
      ),
    },
    {
      title: "Core Values",
      content:
        "Our core values at Karnasree are to uphold integrity, respect the environment and community, and deliver a quality experience to our patrons.",
      icon: (
        <ShieldCheck className="absolute top-4 right-4 text-emerald-900 opacity-15 w-16 h-16" />
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side pinning effect
      gsap.to(leftRef.current, {
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top top",
          end: "bottom 40%",
          pin: true,
          pinSpacing: false,
        },
      });

      // Right side animation
      gsap.fromTo(
        sectionsRef.current.children,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          paddingTop: "20px",
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section className="w-full py-12 bg-emerald-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 px-4  lg:grid-cols-2 gap-12">
        {/* Left Side - Fixed Text */}
        <div ref={leftRef} className="flex flex-col">
          <h2 className="!text-emerald-900 font-ptserif tracking-tight font-bold text-3xl md:text-5xl lg:text-6xl">
            What We Believe In
          </h2>
          <p className="mt-4 text-gray-700">
            At Karnasree Farms, we go beyond just land transactions. We are a
            passionate community dedicated to sustainable living and
            environmental stewardship. Our goal is to rejuvenate barren
            landscapes, transforming them into flourishing farmlands through
            thoughtful care and eco-friendly practices.
          </p>
        </div>

        {/* Right Side - Scrollable Cards */}
        <div ref={sectionsRef} className="flex flex-col gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
            >
              {section.icon} {/* Display the icon */}
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-900">
                {section.title}
              </h3>
              <p className="mt-2 text-lg text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionMissionValues;
