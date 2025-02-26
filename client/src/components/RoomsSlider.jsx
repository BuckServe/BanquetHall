import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { roomData } from "../data/data";
import RoomCard from "./RoomCard";

const RoomsSlider = () => {
  return (
    <div className="px-20 py-8 font-sans">
      <h1 className="text-[2rem] font-bold text-gray-800 mb-6 text-center">
        Rooms
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
          1024: { items: 2.1 },
        }}
      >
        {console.log("what is ", roomData)}
        {roomData &&
          roomData?.map((item) => (
            <RoomCard
              key={item.id}
              image={item?.image}
              roomNumber={item.roomNumber}
              roomCapacity={item.roomCapacity}
              roomArea={item.roomArea}
            />
          ))}
      </OwlCarousel>
    </div>
  );
};

export default RoomsSlider;
