import React from "react";
import Subheader from "../_components/Subheader";
import Image from "next/image";
import VideoEmbed from "../_components/VideoEmbed";
import Link from "next/link";

function page() {
  return (
    <section>
      <Subheader title="Projects" />
      <section className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16 ">
        <div className="max-w-7xl mx-auto ">
          <div className="gap-y-8 md:gap-y-0 gap-x-0 lg:gap-x-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="text-gray-900 mb-4 md:mb-8">
                <p className="text-lg mt-1 text-above-heading">
                  Your Farm Villa Retreat Near bengaluru
                </p>
                <h2 className="heading-secondary font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
                  Own a Legacy Rooted in Nature
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Imagine waking up to the soft rustling of leaves, stepping onto
                your veranda with a steaming cup of chai, and watching the
                morning mist roll over your own lush farmland. At Kar Na Sree
                Farm Meadows, you don’t just own land—you own a living,
                breathing ecosystem that flourishes alongside you. Just a short
                drive from bengaluru, this premium farm land with villa project
                offers a unique opportunity to invest in nature while enjoying
                modern comforts.
              </p>
              <div className="mt-6 flex space-x-4 btn">
                {/* <Link
                  href="/"
                  className="text-lg flex items-center rounded-md shadow-md bg-emerald-700 text-white px-6 py-2"
                >
                  Book Site Visit
                </Link> */}
                <Link
                  href="https://drive.google.com/drive/folders/1ia7TbgcEb_qvsWVUSG_dDWSrTersHebr?usp=sharing"
                  target="_blank"
                  className="text-lg bg-amber-700 text-white px-6 py-2 rounded-md shadow-md"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/masterplan-layout.webp"
                alt="karnasree farms trust"
                width="600"
                height="700"
                className="object-cover rounded-2xl py-3 px-4 h-full w-full"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-12 bg-gradient-to-br from-emerald-950 to-emerald-900 px-4 py-8 md:py-12 md:px-8 rounded-md">
            <h2 className="heading-secondary font-ptserif font-bold text-2xl md:text-3xl text-gray-50 lg:text-5xl ">
              A Green Investment That Grows With Time 🌿
            </h2>
            <p className="mt-3 text-gray-200">
              Picture yourself walking through your thriving farm, where the
              rich scent of Sandalwood and Teakwood fills the air—trees that not
              only enhance your surroundings but also grow in value over time.
            </p>
            <h3 className="heading-secondary mt-6 font-ptserif text-gray-100 font-bold text-2xl  lg:text-3xl">
              Harvest Nature’s Bounty{" "}
            </h3>
            <ul className="list-disc list-inside text-wrap mt-3 text-gray-300 flex flex-col gap-y-2">
              <li>
                Grow fresh, organic produce right in your backyard—coconuts
                swaying in the breeze, mangoes ripening under the sun, guavas,
                avocados, jackfruits, and more, all nurtured on your land.
              </li>
              <li>
                Your farm is professionally maintained, ensuring lush greenery
                and healthy growth without the hassle.
                <ul className="flex flex-col gap-y-2 mt-2">
                  <li>✅ First 3 Years – Just ₹3/sq.ft. </li>{" "}
                  <li>✅ From 4th Year Onwards – Only ₹5/sq.ft.</li>
                </ul>
              </li>
            </ul>
            <h3 className="heading-secondary mt-6 font-ptserif text-gray-100 font-bold text-2xl  lg:text-3xl">
              Your Dream Farm Villa Awaits
            </h3>
            <ul className="list-disc list-inside text-wrap mt-3 text-gray-300 flex flex-col gap-y-2">
              <li>
                Thoughtfully designed 1BHK & 2BHK villas on a single plot,
                perfect for a cozy retreat.
              </li>
              <li>
                Spacious 3BHK & 4BHK villas available by combining two adjoining
                plots for enhanced luxury & privacy.
              </li>
              <li>
                Built with eco-friendly red bricks, blending rustic charm with
                modern amenities for a serene living exp
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto pb-6 md:pb-12 px-4">
        <h2 className="heading-secondary font-ptserif font-bold text-2xl md:text-3xl  lg:text-5xl mb-3">
          Why Invest in Kar Na Sree Farm Meadows?
        </h2>
        <ul className="flex flex-col gap-y-1 list-disc list-inside">
          <li>
            Full Ownership – Unlike UDS models, you hold 100% ownership of your
            land & villa.
          </li>
          <li>
            No Crop Profit Sharing – Enjoy 100% of your farm’s yield, no
            middlemen involved.
          </li>
          <li>
            Strategic Location – Situated near STRR (Satellite Town Ring Road)
            bengaluru, ensuring high appreciation value.
          </li>
          <li>
            Vaastu-Compliant Villas – Designed to bring harmony, balance, and
            prosperity into your life.
          </li>
          <li>
            Sustainable Living – Integrated rainwater harvesting, solar energy,
            and zero-waste management for a self-sufficient lifestyle.
          </li>
          <li>
            Expandable Property – Need more space? Acquire adjoining plots for a
            larger, personalized estate.
          </li>
        </ul>

        <h2 className="heading-secondary font-ptserif font-bold mt-4 text-3xl md:text-3xl mb-3">
          Seamless & Secure Purchase Process
        </h2>

        <p className="text-gray-600 mb-2">
          No-Cost EMI for 3 Years – Start with an initial payment of ₹5 Lakhs,
          and convert the rest into 0% interest EMIs for up to 3 years. (As this
          is an agricultural project, bank financing does not apply.)
        </p>
        <p className="text-gray-600 mb-1">
          100% Legal Clarity – All legal documents are provided upfront for
          verification before making any payment.
        </p>

        <h2 className="heading-secondary font-ptserif font-bold mt-4 text-3xl md:text-3xl mb-3">
          Own More Than Land – Own a Lifestyle
        </h2>

        <p className="text-gray-600 mb-2">
          This isn’t just about buying farm land near bengaluru—it’s about
          investing in a legacy that nurtures both nature and your future.
          Imagine your children growing up surrounded by nature, learning to
          plant, harvest, and live sustainably. Imagine weekends spent under the
          shade of your own fruit trees, unwinding in a home that feels like a
          permanent retreat
        </p>
        <p className="text-gray-600 mb-1">
          The time to invest in a life you truly deserve is now. 🌱
        </p>
      </div>

      <VideoEmbed />
    </section>
  );
}

export default page;
