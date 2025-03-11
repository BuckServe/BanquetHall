import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", number: "", event_type: "", event_date: "" , guest:"", service_needed:"", special_request: ""});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
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
      setFormData({ name: "", phone: "", event_type: "", event_date: "", guest:"", service_needed:"", special_request: ""})
    } catch (err) {    
      console.log('ERROR', err);
    }
    setIsLoading(false)
  };

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request a Quote</h2>
        <p className="text-center text-gray-600 mb-6">Fill the form below to get in touch</p>
        {success && <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">Quote has been sent successfully!</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded" pattern="[0-9]{10,15}" required />
          <input type="text" name="event_type" placeholder="Your Event Type" value={formData.event_type} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input
            type="date"
            name="event_date"
            placeholder="Select Event Date"
            className="w-full p-3 border rounded" required
            onChange={handleChange}
          />
          <input type="number" name="guest" placeholder="Your Guest Count" value={formData.guest} onChange={handleChange} className="w-full p-3 border rounded" required />
          <textarea name="service_needed" placeholder="Additional Services" value={formData.service_needed} onChange={handleChange} className="w-full p-3 border rounded" rows="2"></textarea>
          <textarea name="special_request" placeholder="Special Requests" value={formData.special_request} onChange={handleChange} className="w-full p-3 border rounded" rows="2"></textarea>
          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-800 transition duration-300">Request a Quote</button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;