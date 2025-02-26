import React from "react";
// import { IoCarSportOutline } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiHomeGarage, GiSaloon } from "react-icons/gi";

const Facilities = () => {
  return (
    <div className="px-20 lg:px-60 py-20 font-sans">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 items-justify-center">
        <div className="flex items-center justify-center space-x-10">
          <GiSaloon size={40} className="text-cream" />
          <div className="flex flex-col">
            <span className="font-bold">3</span>
            <span className="font-semibold text-gray">Halls</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10">
          <FaPeopleRoof size={40} className="text-cream" />
          <div className="flex flex-col">
            <span className="font-bold">2000</span>
            <span className="font-semibold text-gray">Max Guests</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10">
          <GiHomeGarage size={40} className="text-cream" />
          <div className="flex flex-col">
            <span className="font-bold">300</span>
            <span className="font-semibold text-gray">Parkings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
