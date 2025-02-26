import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { hallData } from "../data/data";
import HallCard from "./HallCard";

const HallsSlider = () => {
  return (
    <div className="px-20 py-8 font-sans">
      <h1 
      className="text-[2rem] font-bold text-gray-800 mb-6 text-center"
      >
        Halls
      </h1>
      <OwlCarousel
        className="owl-theme lg:py-5 md:py-5"
        loop
        margin={10}
        autoplay={true}
        items={5}
        dots={false}
        center={true}
        responsive={{
          0: { items: 1 },
          640: { items: 2 },
          1024: { items: 2 },
        }}
      >
        {hallData &&
          hallData?.map((item) => (
            <HallCard
              key={item.id}
              image={item?.image}
              hallNumber={item.hallNumber}
              hallCapacity={item.hallCapacity}
              hallArea={item.hallArea}
              hallService={item.hallServise}
            />
          ))}
      </OwlCarousel>
    </div>
  );
};

export default HallsSlider;
