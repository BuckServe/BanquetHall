import React from "react";
import Footer from "../components/Footer";
import HallsSlider from "../components/HallsSlider";
import Header from "../components/Header";
import BookingCalendar from '../components/BookingCalender';
import GoogleMapComponent from "../components/GoogleMapComponent";


const Home = () => {
  return (
    <div>
     <Header />
      <HallsSlider />
      <GoogleMapComponent /> {/* Add the Map Component here */}
      <Footer />
    </div>
  );
};

export default Home;
