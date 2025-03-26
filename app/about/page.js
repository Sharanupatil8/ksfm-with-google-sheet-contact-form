import Image from "next/image";
import React from "react";
import Subheader from "../_components/Subheader";
import OurTeam from "../_components/OurTeam";
import Vision from "../_components/Vision";

function page() {
  return (
    <section>
      <Subheader title="About Us" />
      <section className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto gap-y-8 md:gap-y-0 gapx-0 lg:gap-x-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="text-gray-900 mb-4 md:mb-8">
              <p className="text-lg mt-1 text-above-heading">
                We Bring Back Farmland Living
              </p>
              <h2 className="heading-secondary font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
                Our Story
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Karnasree Farm Meadows is more than a project; it is a dream
              deeply rooted in nature and shaped by the vision of our founder, M
              R Shivakumar Gowda. As an agriculturist, he developed a lifelong
              connection with the land, believing that true fulfillment comes
              from living in harmony with nature.
            </p>
            <p className="text-gray-600 mb-4">
              Inspired by his mother’s words, “Build a home, and help others
              achieve their dreams of homeownership,” he dedicated his life to
              creating spaces where families could thrive. Karnasree Farm
              Meadows is his most heartfelt endeavor, blending modern living
              with the simplicity of nature.
            </p>
            <p className="text-gray-600 mb-4">
              Set amidst lush greenery, Karnasree Farm Meadows offers a
              tranquil, eco-friendly lifestyle. With sprawling landscapes,
              serene surroundings, and thoughtfully designed amenities, it
              embodies a vision of balance and rejuvenation.
            </p>
            <p className="text-gray-600 mb-4">
              More than a retreat, it is a sanctuary—a testament to M R
              Shivakumar Gowda’s agricultural roots and his commitment to
              preserving the land for future generations. Here, the warmth of
              community meets the beauty of nature, offering a life of peace and
              fulfillment.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/legacy-trust.webp"
              alt="karnasree farms trust"
              width="600"
              height="700"
              className="object-cover rounded-3xl py-3 px-4 h-full w-full"
            />
          </div>
        </div>
      </section>
      <Vision />
      <OurTeam />
    </section>
  );
}

export default page;
