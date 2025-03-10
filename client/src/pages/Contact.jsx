import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await emailjs.send(
        'service_f1tgi2d',
        'template_oo3qlm9',
        formData,
        {
          publicKey: 'IXcoT1wPUz9NP8MYD',
        },
      );
      setSuccess(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (err) {    
      console.log('ERROR', err);
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