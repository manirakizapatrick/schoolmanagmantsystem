import React from 'react';
import { Link } from 'react-router-dom';

// Sample province data
const provinces = [
  { name: 'Kigali', path: '/kigali' }, // Link to Kigali page
  { name: 'Northern Province', path: '/northern-province' },
  { name: 'Southern Province', path: '/southern-province' },
  { name: 'Western Province', path: '/western-province' },
  { name: 'Eastern Province', path: '/eastern-province' }
];

function School() {
  return (
    <div className="flex flex-col items-center justify-center h-96
     bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <h1 className="text-4xl font-bold text-blue-700">Our School Location</h1>
      <h2 className="text-2xl font-medium  text-gray-600">Provinces of Rwanda</h2>

      {/* Province Links */}
      <div className="w-full flex flex-wrap justify-center gap-4 text-lg text-blue-600">
        {provinces.map((province, index) => (
          <Link
            key={index}
            to={province.path}
            className="px-4 py-2 bg-white border border-blue-500 text-blue-700 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 no-underline"
          >
            {province.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default School;
