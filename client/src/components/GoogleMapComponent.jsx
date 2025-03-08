import React from 'react';

const GoogleMapComponent = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.6852425604684!2d72.60991357445074!3d32.05071012075102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39217108cdceaebf%3A0x52e4ebeda0aa9865!2sFour%20Season%20Event%20Marquee!5e0!3m2!1sen!2str!4v1741286837521!5m2!1sen!2str";

  return (
    <React.Fragment>
            <h1 className="text-[3rem] font-sans font-extrabold text-gray-800 mb-6 text-center">
Location
      </h1>
      <div style={styles.container}>
      <iframe
        src={mapUrl}
        style={styles.map}
        title="Google Map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    </React.Fragment>

  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f0f0f0', // Light background color
  },
  map: {
    width: '80%', // Adjust width as needed
    height: '450px', // Fixed height or use percentages for responsiveness
    border: '0',
    borderRadius: '15px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
  },
};

export default GoogleMapComponent;