import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

const BookingCalendar = ({ onSelectDate }) => {
  const [date, setDate] = useState(new Date());

  const partialBookingDates = ["2025-02-01", "2025-02-18"];
  const bookingDates = [
    "2025-02-19", "2025-02-21", "2025-02-22",
    "2025-02-23", "2025-02-24", "2025-02-25",
    "2025-02-26", "2025-02-27"
  ];

  const isBooked = (date) => bookingDates.includes(dayjs(date).format("YYYY-MM-DD"));
  const isPartiallyBooked = (date) => partialBookingDates.includes(dayjs(date).format("YYYY-MM-DD"));

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onSelectDate(selectedDate); // Pass the selected date back to the form
  };

  return (
<div className="max-w-xs mx-auto bg-white rounded-lg p-2 shadow-md text-black">
      <div className="mb-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-600 rounded-md mr-2"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-orange-500 rounded-md mr-2"></div>
          <span>Partially Booked</span>
        </div>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month" && isBooked(date)) {
            return "bg-red-600 text-white font-bold rounded-md pointer-events-none";
          } else if (view === "month" && isPartiallyBooked(date)) {
            return "bg-orange-500 text-white font-bold rounded-md pointer-events-none";
          } else if (
            date.getDate() === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
          ) {
            return "bg-blue-600 bg-opacity-50 text-white font-bold rounded-md";
          }
        }}
      />
    </div>
  );
};

export default BookingCalendar;
