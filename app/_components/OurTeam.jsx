import Image from "next/image";
import React from "react";

const team = [
  {
    name: "M R Shivakumar Gowda",
    image: "/team/shivakumar-gowda-managing-partner.jpg",
    description:
      "With decades of experience in real estate and farmland development, D R Shivakumar, Director and Managing Partner of Karnasree Farm Developers and Promoters, began his journey in rural Karnataka, where his deep connection to the land inspired his vision for Karnasree Farm Meadows. Driven by a passion for creating sustainable spaces, he developed this project to provide both a serene environment and valuable investment opportunities.",
  },
  {
    name: "K Malini Shivakumar Gowda",
    image: "/team/malini-shivakumar-managing-partner.jpg",
    description:
      "K. Malini Shivakumar Gowda, Director and Managing Partner of Karnasree Farm Developers and Promoters, has been an integral part of the journey behind Karnasree Farm Meadows. Her unwavering support and strategic vision, alongside Shivakumar Swamy Gowda, have played a crucial role in the development of the project, enhancing its appeal as a prime investment opportunity for prospective farm buyers.",
  },
  {
    name: "D Shimanth S Arjun Gowda",
    image: "/team/shimanth-partner.jpg",
    description:
      "Shimanth Arjun, Vice Chairman of Karnasree Farm Developers and Promoters, brings his expertise from the warehousing industry to continue the family’s agricultural legacy. He plays a key role in advancing Karnasree Farm Meadows, driving its growth and success.",
  },
  {
    name: "Nakshitha S Gowda",
    image: "/team/naskhita-partner.jpg",
    description:
      "Nakshitha, CEO of Karnasree Farm Developers and Promoters, brings her expertise from leading Kelsi Organics, a brand promoting organic food culture. Her leadership is focused on enhancing the customer experience and driving the growth of Karnasree Farm Meadows, expanding its reach and appeal.",
  },
  {
    name: "Manasa S Gowda",
    image: "/team/manasa-partner.jpg",
    description:
      "Manasa, a managing partner at Kar Na Sree Farm Developers and Promoters, is deeply passionate about the rural sector. She plays a key role in managing and promoting Karnasree Farm Meadows, driving its growth and success.",
  },
];

function OurTeam() {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
          A team that made it possible
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
          Our Team
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 gap-6 md:gap-8 justify-center">
        {team.map((member) => (
          <div
            key={member.name}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={360}
              height={480}
              className="w-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-opacity duration-500">
              <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
              <p className="text-sm mt-2 hidden group-hover:block ">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
