"use client";
import leftArrow from "@/asset/left-arrow.svg";
import rightArrow from "@/asset/right-arrow.svg";
import Image from "next/image";

import atom from "@/asset/atom.png";
import ai from "@/asset/ai.png";
import spaceship from "@/asset/launch.png";
import binocular from "@/asset/binocular.png";

export default function SlideShow() {
  const filteredItems = [
    {
      id: 1,
      img: spaceship,
      title: "Introduction to Rocket Science",
      description:
        "Covers fundamental design architecture and programming of robots.Covers fundamental design architecture ",
    },
    {
      id: 2,
      img: atom,
      title: "Astro Physics",
      description:
        "Astrophysics is a branch of space science that uses physics and chemistry to study astronomical objects and phenomena",
    },
    {
      id: 3,
      img: ai,
      title: "Artificial Intelligence",
      description:
        "Covers fundamental design architecture and programming of robots.Covers fundamental design architecture ",
    },
    {
      id: 4,
      img: binocular,
      title: "Astronomical Study",
      description:
        "Covers fundamental design architecture and programming of robots.Covers fundamental design architecture ",
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 235;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 235;
  };
  return (
    <div className="mt-4 mx-8">
      <header className="flex justify-between items-center">
        <p className="text-white font-bold text-2xl">Popular Topics 🔥</p>
        <div className="flex space-x-5">
          <button
            className="h-8 w-8 p-1 border shadow-lg rounded-md"
            onClick={slideLeft}
          >
            <Image src={leftArrow} alt="leftArrow" />
          </button>
          <button
            className="h-8 w-8 p-1 border shadow-lg rounded-md"
            onClick={slideRight}
          >
            <Image src={rightArrow} alt="rightArrow" />
          </button>
        </div>
      </header>
      <div
        className="row-container flex overflow-x-scroll no-scrollbar mt-4 smooth-scroll"
        id="slider"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="row-item mx-2 w-1/3 flex-shrink-0 border rounded-lg"
          >
            <div className="flex flex-col w-full h-52">
              <div className="flex flex-grow">
                <div className="flex-none w-1/3 flex items-center justify-center ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="flex-1 p-4">
                  <h1 className="text-xl text-white font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-700 text-xs">{item.description}</p>
                </div>
              </div>
              <div className="w-full mt-auto p-4">
                <button className="w-full border-gray-50 border text-white py-2 px-4 rounded hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
