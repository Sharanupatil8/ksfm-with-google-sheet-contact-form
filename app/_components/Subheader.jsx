"use client";
import React from "react";

function Subheader({ title }) {
  return (
    <section className="w-full h-[200px] md:h-[240px] lg:h-[280px] hero-bg relative">
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content container with padding-top to account for navbar */}
      <div className="flex h-full justify-center items-center relative pt-24 pb-12 md:pb-0">
        <h2 className="heading-secondary text-white font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl tracking-wider">
          {title}
        </h2>
      </div>
    </section>
  );
}

export default Subheader;
