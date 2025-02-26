import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs'


const BookingCalendar = () => {
 const [date, setDate] = useState(new Date());

 const [partialBookingDates, setPartialBookingDates] = useState([
    '2025-02-01', '2025-02-18'
  ]);
 const [bookingDates, setBookingDates] = useState([ '2025-02-19', 
    '2025-02-21', '2025-02-22', '2025-02-23', '2025-02-24', 
    '2025-02-25', '2025-02-26', '2025-02-27'
  ]);

  const isBooked = (date) => {
    return bookingDates.includes(dayjs(date).format('YYYY-MM-DD'));
  };
  const isPartiallyBooked = (date) => {
    return partialBookingDates.includes(dayjs(date).format('YYYY-MM-DD'));
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg p-2 shadow-md">
      <div className="mb-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-600 rounded-md mr-2"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-orange-500 rounded-md mr-2"></div>
          <span>Partially Booked</span>
        </div>
        {/* <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-600 rounded-md mr-2"></div>
          <span>Today</span>
        </div> */}
      </div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === 'month' && isBooked(date)) {
            return 'bg-red-600 text-white rounded-md pointer-events-none';
          }
          else if (view === 'month' && isPartiallyBooked(date)){
            return 'bg-orange-500 text-white rounded-md pointer-events-none';
          }
          if (date.getDate() === new Date().getDate() && 
              date.getMonth() === new Date().getMonth() && 
              date.getFullYear() === new Date().getFullYear()) {
            return 'bg-blue-600 bg-opacity-50 text-white rounded-md';
          }
        }}
      />
    </div>
  );
};

export default BookingCalendar;
