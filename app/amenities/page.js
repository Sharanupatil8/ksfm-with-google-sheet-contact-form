import React from "react";
import Subheader from "../_components/Subheader";
import Amenities from "../_components/Amenities";

function page() {
  return (
    <section>
      <Subheader title="Eco enhancing Amenities" />
      <section className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16 bg-gradient-to-br from-emerald-100 to-emerald-50">
        <div className="max-w-7xl mx-auto ">
          <div>
            <div className="text-gray-900 mb-4 md:mb-8">
              <p className="text-lg mt-1 text-above-heading">
                Experience the farmland comforts and conveniences.
              </p>
              <h2 className="heading-secondary font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
                Our Amenities
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Karnasree Farm Meadows takes pride in providing a plethora of
              thoughtfully conceived amenities for farmland owners to enjoy.
            </p>
            <p className="text-gray-600 mb-4">
              The amenities can be classified into vast areas dedicated to
              sports, lush spacious gardens, a property dedicated to the elderly
              citizens, health centers, water bodies, landscaped areas, animal
              shelters, and many more.
            </p>
            <p className="text-gray-600 mb-4">
              With such highly functional amenities, there is never going to be
              a dull moment inside the property. Farmland owners, visitors, and
              friends can enjoy the tranquility that comes with being accessible
              to Karnasree Farm Meadows.
            </p>
          </div>
          <Amenities />
        </div>
      </section>
    </section>
  );
}

export default page;
