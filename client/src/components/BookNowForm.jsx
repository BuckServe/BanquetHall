import React, { useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbClockHour4Filled, TbClockHour8Filled } from "react-icons/tb";
import BookingCalendar from "./BookingCalender";
import dayjs from "dayjs";

const BookNowForm = ({ showForm, toggleForm }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  if (!showForm) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Booking Date:", selectedDate);
    toggleForm();
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Close the calendar after selecting a date
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col gap-7 rounded-md p-8 w-full md:w-[34rem] lg:w-[34rem] lg:h-[38.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Close Button */}
        <button onClick={toggleForm} className="self-end text-gray">
          <FaTimes className="text-2xl" />
        </button>

        <h1 className="text-center font-bold text-[1.7rem] text-black">
          Fill the booking details
        </h1>

        {/* Event Input */}
        <div className="lg:w-[31rem] lg:h-[4.25rem] bg-lightgray rounded-2xl">
          <input
            type="text"
            placeholder="What are we planning?"
            className="w-full h-full border-none outline-none p-3 rounded-2xl bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
          />
        </div>

        {/* Calendar Toggle Button */}
        <div className="text-gray font-medium">
          <label>Event date</label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Calendar Input */}
          <div className="relative flex gap-3 p-3 items-center rounded-2xl bg-lightgray cursor-pointer" onClick={toggleCalendar}>
            <BsCalendar2Fill className="text-[1.7rem] text-gray" />
            <span className="text-gray font-medium">
              {selectedDate ? dayjs(selectedDate).format("YYYY-MM-DD") : "Select a date"}
            </span>
            {showCalendar && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-50 z-20">
                <div className="bg-white shadow-md rounded-md p-4">
                  <BookingCalendar
                    onSelectDate={handleDateSelect}
                  />
                </div>
              </div>
            )}
          </div>

          {/* People Input */}
          <div className="flex gap-3 p-3 items-center rounded-2xl bg-lightgray">
            <MdGroups className="text-[1.7rem] text-gray" />
            <input
              type="text"
              placeholder="People"
              className="w-full h-full border-none outline-none bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
            />
          </div>

          {/* Start Time Input */}
          <div className="flex gap-3 p-3 items-center rounded-2xl bg-lightgray">
            <TbClockHour4Filled className="text-[1.7rem] text-gray" />
            <input type="time" className="w-full h-full border-none outline-none bg-lightgray" />
          </div>

          {/* End Time Input */}
          <div className="flex gap-3 p-3 items-center rounded-2xl bg-lightgray">
            <TbClockHour8Filled className="text-[1.7rem] text-gray" />
            <input type="time" className="w-full h-full border-none outline-none bg-lightgray" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex m-auto p-3 items-center rounded-2xl bg-cream">
          <button className="w-full py-3">Submit Now</button>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;