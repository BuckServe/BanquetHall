import "@fontsource/libre-franklin/100.css"; // Thin
import "@fontsource/libre-franklin/200.css"; // Extra Light
import "@fontsource/libre-franklin/300.css"; // Light
import "@fontsource/libre-franklin/400.css"; // Regular
import "@fontsource/libre-franklin/500.css"; // Medium
import "@fontsource/libre-franklin/600.css"; // SemiBold
import "@fontsource/libre-franklin/700.css"; // Bold
import "@fontsource/libre-franklin/800.css"; // ExtraBold
import "@fontsource/libre-franklin/900.css"; // Black
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Booking from "./pages/Booking.jsx";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<Booking />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
