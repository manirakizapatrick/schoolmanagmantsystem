import React, { useState, useEffect } from 'react';
// Import placeholder images - you'll need to replace these with your actual images
import Image1 from '../asset/image/images1.jpg';
import Image2 from '../asset/image/images2.jpg';
import Image3 from '../asset/image/images4.jpg';
import Image4 from '../asset/image/images6.jpg';
import Image5 from '../asset/image/images7.jpg';
import Image6 from '../asset/image/images9.jpg';
import Image7 from '../asset/image/images10.jpg';

function ImageCard({ image, title, description, buttonText = "View Details", onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate cards on load with staggered delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjusted to have all enter at the same time.
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        hover:-translate-y-2 transform
        shadow-[0_10px_20px_rgba(0,0,0,0.07)]
        hover:shadow-[0_14px_28px_rgba(0,0,0,0.12),0_10px_10px_rgba(0,0,0,0.08)]`}
    >
      <div className="h-44 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{/* Optional hover text */}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className={`  text-blue-900 mb-1 transform transition-transform duration-300 
          ${isVisible ? 'translate-x-0' : '-translate-x-4'}`}>
          {title}
        </h2>
        <p className={`text-black-600 text-xs mb-3 line-clamp-2 transition-opacity duration-500 delay-200
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {description}
        </p>
        
        {/* Button triggering an action */}
        <button 
          onClick={onClick} // Trigger action on button click
          className="w-full px-3 py-2 rounded-lg text-blue-900 text-sm font-medium transition-all duration-300 
                     relative overflow-hidden group
                     bg-sky-200 from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 
                     shadow-md hover:shadow-lg">
          <span className="relative z-10">{buttonText}</span>
          <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-700 to-violet-600 
                          transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>
      </div>
    </div>
  );
}

function ImageGallery() {
  const [headerVisible, setHeaderVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Sample click handler function for the buttons
  const handleCardClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  const imageData = [
    {
      image: Image1,
      title: "Student Activities",
      description: "Explore our diverse range of student activities and extracurricular programs."
    },
    {
      image: Image2,
      title: "Modern Classrooms",
      description: "Our state-of-the-art classrooms are designed for optimal learning experiences."
    },
    {
      image: Image3,
      title: "Campus Life",
      description: "Discover what makes our campus community so special."
    },
    {
      image: Image4,
      title: "Science Labs",
      description: "Advanced laboratory facilities for hands-on scientific exploration."
    },
    {
      image: Image5,
      title: "Sports Facilities",
      description: "Comprehensive sports facilities to promote physical education and wellness."
    },
    {
      image: Image6,
      title: "Library Resources",
      description: "Extensive library collection and digital resources for research and learning."
    },
    {
      image: Image7,
      title: "School Events",
      description: "Annual events and celebrations that bring our school community together."
    }
  ];

  return (
    <div className="bg-sky-50 from-gray-50 to-gray-100 py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-8 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-3">Welcome To School Management System</h2>
          <p className="text-base text-blue-600 max-w-2xl mx-auto">
            <h1> Wellcome To School Management System</h1>
          </p>
          my School Garly and more ditails
        </div>
        
        {/* Grid for image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {imageData.map((item, index) => (
            <ImageCard
              key={index}
              index={index}
              image={item.image}
              title={item.title}
              description={item.description}
              buttonText="View Details"
              onClick={() => handleCardClick(item.title)} // Pass the item title to the click handler
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;