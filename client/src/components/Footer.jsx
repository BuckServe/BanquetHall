import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="bottom-0 w-full h-[15rem] px-32 flex items-center justify-between bg-gradient-to-r from-black-800 to-black-900 text-white">

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923086608585"
        className="fixed rounded-full p-3 bg-[#25D366] text-black bottom-6 right-6 shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      >
        <FaWhatsapp size={36} />
      </a>

      {/* Address & Contact */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 transition-colors text-white hover:text-gray">
          <FaLocationDot className="text-lg  " />
          <span className="text-[1rem] font-sans">Sargodha, Pakistan</span>
        </div>
        <div className="flex items-center gap-2 text-white hover:text-gray transition-colors">
          <FaPhoneAlt className="text-lg" />
          <span className="text-[1rem] font-sans ">+92 308 6608585</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-end gap-2 ">
        <Link
          to="/"
          className="text-[1rem] font-sans text-white hover:text-gray"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-[1rem] font-sans text-white hover:text-gray"
        >
          About Us
        </Link>
        <Link
          to="/gallery "
          className="text-[1rem] font-sans text-white hover:text-gray"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="htext-[1rem] font-sans text-white hover:text-gray"
        >
          Request a Quote
        </Link>
      </div>
    </footer>
  );
};

export default Footer;