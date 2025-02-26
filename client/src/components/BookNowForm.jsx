import React from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbClockHour4Filled, TbClockHour8Filled } from "react-icons/tb";

const BookNowForm = ({ showForm, toggleForm }) => {
  if (!showForm) return null;
  const hadleSubmit = (event) => {
    event.preventDefault();
    toggleForm();
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray bg-transparent bg-opacity-50">
      <form
        onSubmit={hadleSubmit}
        className="bg-white flex flex-col gap-7 rounded-md p-8 w-full md:w-[34rem] md:m-auto lg:w-[34rem] lg:h-[38.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <button onClick={toggleForm}>
          <FaTimes className="text-gray" />
        </button>
        <h1 className=" flex w-full justify-center items-center font-bold text-[1.7rem] text-black">
          Fill the booking details
        </h1>
        <div className="lg:w-[31rem] lg:h-[4.25rem] bg-lightgray rounded-2xl">
          <input
            type="text"
            placeholder="What are we planing?"
            className="w-full h-full border-none outline-none flex p-3 items-center rounded-2xl box-border bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
          />
        </div>
        <div className="text-gray font-medium">
          <label>Event date</label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
            <BsCalendar2Fill className="text-[1.7rem] text-gray" />
            <input
              type="date"
              placeholder="Select a date"
              className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem] appearance-none"
            />
          </div>
          <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
            <MdGroups className="text-[1.7rem] text-gray" />
            <input
              type="text"
              placeholder="People"
              className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
            />
          </div>
          <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
            <TbClockHour4Filled className="text-[1.7rem] text-gray" />
            <input
              type="time"
              placeholder="From"
              className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem] appearance-none"
            />
          </div>
          <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
            <TbClockHour8Filled className="text-[1.7rem] text-gray" />
            <input
              type="time"
              placeholder="To"
              className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem] appearance-none"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-[1.1rem] h-[1.1rem] font-medium"
          />
          <label htmlFor="" className="text-gray text-[1.1rem]">
            I'm flexible on dates and times
          </label>
        </div>
        <div className=" flex m-auto p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-cream">
          <button className="w-full py-3 ">Submit Now</button>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;
