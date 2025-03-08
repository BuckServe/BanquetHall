import React, { useState } from "react";
import banner from "../constants/photos/bannerImage.jpeg";
import BookNowForm from "./BookNowForm";
import Navbar from "./Navbar";
const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div
      className="relative w-full h-[600px] lg:h-[600px] md:h-[600px]  bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Navbar />
      <div className="absolute bottom-10 left-20 flex flex-col gap-12 items-start justify-center text-white font-sans">
      {/* text-[3rem] font-sans font-extrabold  text-gray-800 mb-6 text-center */}
        <h1 className="flex flex-col font-medium text-[4.3rem]/[4.3rem]">
          <span className="font-sans  text-gray-800">FOUR</span> 
          <span>SEASON</span>
          <span className="forn-bold">EVENTS</span>
        </h1>
        <button
          onClick={toggleForm}
          className="w-[13rem] h-[3rem] backdrop-blur-[0.5rem]"
        >
          BOOK NOW
        </button>
        <BookNowForm toggleForm={toggleForm} showForm={showForm} />
      </div>
    </div>
  );
};

export default Header;
