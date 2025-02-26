import React from "react";
import Footer from "../components/Footer";
import HallsSlider from "../components/HallsSlider";
import Header from "../components/Header";
import BookingCalendar from '../components/BookingCalender';

const Home = () => {
  return (
    <div>
      <Header />
      {/* <RoomsSlider /> */}
      <h1>Hall Booking Calendar</h1>
      <BookingCalendar />
      <HallsSlider />
      <Footer />
    </div>
  );
};

export default Home;
