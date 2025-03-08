import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { hallData } from "../data/data";
import HallCard from "./HallCard";

const HallsSlider = () => {
  return (
    <div className="px-32 lg:px-20 py-20 font-sans flex flex-col items-center justify-center">
      <div className=" mx-auto text-center text-gray-800 mb-6">
        Welcome to Four Seasons Events, Sargodha’s premier event destination. With over 10 years of experience and 500+ successful events, we specialize in creating unforgettable celebrations. From elegant weddings to corporate gatherings, we ensure every event is executed with perfection.
        
        Our commitment to high-quality service, a luxurious ambiance, and attention to detail sets us apart. We value our clients and build lasting relationships by understanding their needs and delivering beyond expectations.
        
        Let us make your special moments truly extraordinary at Four Seasons Events – where every event is a masterpiece.
      </div>
      <h1 className="text-[3rem] font-sans font-extrabold text-gray-800 mb-6 text-center">
        Grand Venue
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
          hallData.map((item) => (
            <HallCard
              key={item.id}
              image={item.image}
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