import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyQciCA9beHqxnM44u_DXqRC4amVQVhLnZhWBeiB7yMu9eefrjwUrAa_wx1YHP6iqkFzA/exec", // Replace with your Web App URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Message Sent Successfully!");
        setSuccess(true);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">Fill the form below to get in touch</p>
        {success && <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">Message sent successfully!</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded" pattern="[0-9]{10,15}" required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded" rows="4" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-800 transition duration-300">Send Message</button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;