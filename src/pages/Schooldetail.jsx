import React from 'react';

const SchoolDetail = () => {
  const schoolInfo = {
    name: "Greenfield Academy",
    address: "1234 Elm Street, Gisenyi",
    phone: "+250 788 123 456",
    email: "info@greenfieldacademy.com",
    description: "A leading institution offering quality education from Kindergarten to High School. Our school is committed to excellence and holistic development.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
        {schoolInfo.name}
      </h1>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-1/3">Address:</span>
          <p className="text-gray-600">{schoolInfo.address}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-1/3">Phone:</span>
          <p className="text-gray-600">{schoolInfo.phone}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-1/3">Email:</span>
          <p className="text-gray-600">{schoolInfo.email}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-1/3">Description:</span>
          <p className="text-gray-600">{schoolInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
