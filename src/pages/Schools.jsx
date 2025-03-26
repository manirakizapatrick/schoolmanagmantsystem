import React from 'react';
import backgroundImage from '../asset/image/ac1.jpg';

// Sample province data
const provinces = [
  { name: 'Kigali', path: '/kigali' },
  { name: 'Northern Province', path: '/northern-province' },
  { name: 'Southern Province', path: '/southern-province' },
  { name: 'Western Province', path: '/western-province' },
  { name: 'Eastern Province', path: '/eastern-province' }
];

function School() {
  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-top bg-no-repeat"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundBlendMode: 'overlay',
         // Soft white overlay
      }}
    >
      <div className="absolute inset-0 bg-blue-100 opacity-40 z-0"></div>
      
      <div className="relative z-10 text-center px-4 mt-[-100px]">
        <h1 className="text-4xl font-bold text-blue-900 drop-shadow-lg">Our School Location</h1>
        <h2 className="text-2xl font-medium mt-4 text-gray-800 drop-shadow-md">Provinces of Rwanda</h2>

        {/* Province Links */}
        <div className="mt-6 w-full flex flex-wrap justify-center gap-4 text-lg">
          {provinces.map((province, index) => (
            <a
              key={index}
              href={province.path}
              className="px-4 py-2 bg-white/80 border border-blue-500 text-blue-700 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 no-underline"
            >
              {province.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default School;