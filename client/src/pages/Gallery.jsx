import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images
import G1 from '../assets/images/G1.jpg'; // Adjust the path based on your folder structure
import G2 from '../assets/images/G2.jpg';
import G3 from '../assets/images/G3.jpg';
import G4 from '../assets/images/G4.jpg';
import G5 from '../assets/images/G5.jpg';
import G6 from '../assets/images/G6.jpg';
import G7 from '../assets/images/G7.jpg';
import G8 from '../assets/images/G8.jpg';

// Sample gallery images with imported images
const galleryImages = [
  { id: 1, src: G1, alt: 'Wedding Hall Interior' },
  { id: 2, src: G2, alt: 'Banquet Setup' },
  { id: 3, src: G3, alt: 'Outdoor Ceremony' },
  { id: 4, src: G4, alt: 'Reception Area' },
  { id: 5, src: G5, alt: 'Decorations' },
  { id: 6, src: G6, alt: 'Catering Service' },
];

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-32 lg:px-20 py-20 font-sans">
        <h1 className="text-[3rem] font-sans font-extrabold  text-gray-800 mb-6 text-center">Our Gallery</h1>
        <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mx-auto"
            >
              <img
                src={image.src} // Use the imported image directly
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;