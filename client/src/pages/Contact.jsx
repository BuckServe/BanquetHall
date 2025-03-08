import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <React.Fragment>
      <Header />
      {/* <main className="px-32 lg:px-20 py-20 font-sans">
      <h1 className="text-[3rem] font-sans font-extrabold  text-gray-800 mb-6 text-center">Our Gallery</h1> */}
      <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg   px-32 lg:px-20 py-20 font-sans">
        <h2 className="text-2xl text-[3rem] font-sans font-extrabold  text-gray-800 mb-6 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">Fill the form below to get in touch</p>
        {success && <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">Message sent successfully!</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border rounded focus:ring-2 focus:ring-cream"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 border rounded focus:ring-2 focus:ring-cream"
            required
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Your Phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="w-full p-3 border rounded focus:ring-2 focus:ring-cream"
            pattern="[0-9]{10,15}"
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-3 border rounded focus:ring-2 focus:ring-cream"
            rows="4"
            required
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-cream text-white py-3 rounded hover:bg-cream-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;