import leftArrow from "@/asset/left-arrow.svg";
import rightArrow from "@/asset/right-arrow.svg";
import Image from "next/image";
import Slider from "react-slick";
export default function SlideShow() {
  return (
    <div className="mt-4 mx-8">
      <header className="flex justify-between items-center">
        <p className="text-white font-bold text-2xl">Popular Topics 🔥</p>
        <div className="flex space-x-5">
          <button className="h-8 w-8 p-1 border shadow-lg rounded-md">
            <Image src={leftArrow} alt="leftArrow" />
          </button>
          <button className="h-8 w-8 p-1 border shadow-lg rounded-md">
            <Image src={rightArrow} alt="rightArrow" />
          </button>
        </div>
      </header>
    </div>
  );
}
