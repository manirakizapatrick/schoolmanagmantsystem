import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, BookOpen, Tool } from 'lucide-react';

const SchoolsList = () => {
  const [expandedSchool, setExpandedSchool] = useState(null);
  
  const schools = [
    {
      id: 1,
      name: "Greenfield Academy",
      location: "Gisenyi",
      district: "Rubavu",
      sector: "Gisenyi",
      cell: "Mbugangari",
      village: "Umuganda",
      phoneNumber: "+250 788 123 456",
      combination: "Nursery, Primary and Secondary (O-Level)",
      description: "International curriculum with focus on sciences and arts.",
      facilities: ["Library", "Computer Lab", "Science Lab", "Sports Field"],
      trades: ["Sciences", "Arts", "Languages", "Mathematics", "Digital Media"]  // New trade added here
    },
    {
      id: 2,
      name: "Kigali Primary School",
      location: "Kigali",
      district: "Nyarugenge",
      sector: "Nyarugenge",
      cell: "Biryogo",
      village: "Rwampara",
      phoneNumber: "+250 788 234 567",
      combination: "Nursery and Primary",
      description: "Public primary education with strong community values.",
      facilities: ["Playground", "Library", "Garden", "Music Room"],
      trades: ["Basic Education", "Music", "Arts", "Physical Education", "Digital Media"]  // New trade added here
    },
    {
      id: 3,
      name: "Butare International School",
      location: "Butare",
      district: "Huye",
      sector: "Ngoma",
      cell: "Butare",
      village: "Karubanda",
      phoneNumber: "+250 788 345 678",
      combination: "Primary, Secondary (O-Level and A-Level)",
      description: "Multilingual education emphasizing cultural exchange.",
      facilities: ["Language Lab", "Cultural Center", "Sports Complex", "Library"],
      trades: ["Languages", "Cultural Studies", "Sciences", "Humanities", "Digital Media"]  // New trade added here
    },
    {
      id: 4,
      name: "Nyagatare Technical College",
      location: "Nyagatare",
      district: "Nyagatare",
      sector: "Nyagatare",
      cell: "Nyagatare",
      village: "Mimuri",
      phoneNumber: "+250 788 456 789",
      combination: "Technical and Vocational Education (TVET)",
      description: "Vocational training focused on practical skills development.",
      facilities: ["Workshops", "Computer Lab", "Demonstration Fields", "Auditorium"],
      trades: ["Mechanics", "Carpentry", "Welding", "Agriculture", "Electrical Engineering", "Digital Media"]  // New trade added here
    },
    {
      id: 5,
      name: "Lake Kivu High School",
      location: "Kibuye",
      district: "Karongi",
      sector: "Bwishyura",
      cell: "Kiniha",
      village: "Gatoki",
      phoneNumber: "+250 788 567 890",
      combination: "Secondary (O-Level and A-Level)",
      description: "Secondary education with environmental studies specialization.",
      facilities: ["Science Labs", "Environmental Research Center", "Library", "Sports Field"],
      trades: ["Environmental Science", "Biology", "Chemistry", "Geography", "Digital Media"]  // New trade added here
    },
    {
      id: 6,
      name: "Musanze Academy",
      location: "Musanze",
      district: "Musanze",
      sector: "Muhoza",
      cell: "Cyabararika",
      village: "Rudogo",
      phoneNumber: "+250 788 678 901",
      combination: "Nursery, Primary and Secondary (O-Level)",
      description: "Progressive education with focus on local and global citizenship.",
      facilities: ["Library", "Computer Lab", "Community Center", "Art Studio"],
      trades: ["Citizenship Education", "Social Studies", "Arts", "Sciences", "Digital Media"]  // New trade added here
    },
    {
      id: 7,
      name: "Rubavu Elementary",
      location: "Rubavu",
      district: "Rubavu",
      sector: "Rubavu",
      cell: "Gisa",
      village: "Kabumba",
      phoneNumber: "+250 788 789 012",
      combination: "Nursery and Primary",
      description: "Child-centered approach to early education and development.",
      facilities: ["Playground", "Activity Rooms", "Garden", "Reading Center"],
      trades: ["Early Childhood Education", "Reading", "Arts and Crafts", "Nature Studies", "Digital Media"]  // New trade added here
    },
    {
      id: 8,
      name: "Nyamata Technical Institute",
      location: "Nyamata",
      district: "Bugesera",
      sector: "Nyamata",
      cell: "Kanazi",
      village: "Kibungo",
      phoneNumber: "+250 788 890 123",
      combination: "Technical and Vocational Education (TVET)",
      description: "Technical education specializing in agriculture and technology.",
      facilities: ["Agricultural Plots", "Technology Labs", "Workshop Spaces", "Computer Center"],
      trades: ["Agricultural Technology", "Food Processing", "Computer Science", "Construction", "Digital Media"]  // New trade added here
    },
    {
      id: 9,
      name: "Huye International Academy",
      location: "Huye",
      district: "Huye",
      sector: "Tumba",
      cell: "Cyarwa",
      village: "Cyarwa",
      phoneNumber: "+250 788 901 234",
      combination: "Nursery, Primary, and Secondary (O-Level and A-Level)",
      description: "IB curriculum with emphasis on global perspectives.",
      facilities: ["Media Center", "Science Labs", "Language Center", "Sports Complex"],
      trades: ["International Baccalaureate", "Global Studies", "Sciences", "Mathematics", "Digital Media"]  // New trade added here
    },
    {
      id: 10,
      name: "Muhanga Community School",
      location: "Muhanga",
      district: "Muhanga",
      sector: "Nyamabuye",
      cell: "Gahogo",
      village: "Ruramba",
      phoneNumber: "+250 788 012 345",
      combination: "Primary and Secondary (O-Level)",
      description: "Community-based education focusing on local development needs.",
      facilities: ["Community Hall", "Library", "Craft Center", "Garden"],
      trades: ["Community Development", "Crafts", "Agriculture", "Basic Education", "Digital Media"]  // New trade added here
    }
  ];
  
  const toggleSchoolDetails = (id) => {
    if (expandedSchool === id) {
      setExpandedSchool(null);
    } else {
      setExpandedSchool(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Schools Directory
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {schools.map(school => (
          <div 
            key={school.id}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{school.name}</h2>
              <p className="text-gray-600 mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {school.location}
              </p>
              <p className="text-gray-700 mb-4">{school.description}</p>
            </div>
            
            <div className="flex flex-col space-y-3 mt-auto">
              <button
                onClick={() => toggleSchoolDetails(school.id)}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center"
              >
                {expandedSchool === school.id ? (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    Show More
                  </>
                )}
              </button>
              
              {expandedSchool === school.id && (
                <div className="pt-3 border-t border-gray-200">
                  <div className="mb-4">
                    <div className="flex items-center mb-2 text-gray-700">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium">School Combination:</span>
                      <span className="ml-2">{school.combination}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700 mb-3">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium">Phone:</span>
                      <span className="ml-2">{school.phoneNumber}</span>
                    </div>
                    
                    <div className="flex items-start mb-3 text-gray-700">
                      <Tool className="w-4 h-4 mr-2 text-blue-600 mt-1" />
                      <div>
                        <span className="font-medium">Trades/Specialties:</span>
                        <div className="ml-2">
                          {school.trades.map((trade, index) => (
                            <span key={index} className="block">• {trade}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-gray-800 mb-2">Detailed Location:</h3>
                    <div className="pl-2 border-l-2 border-blue-200 mb-3">
                      <p className="text-gray-700"><span className="font-medium">District:</span> {school.district}</p>
                      <p className="text-gray-700"><span className="font-medium">Sector:</span> {school.sector}</p>
                      <p className="text-gray-700"><span className="font-medium">Cell:</span> {school.cell}</p>
                      <p className="text-gray-700"><span className="font-medium">Village:</span> {school.village}</p>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-800 mb-2">Facilities:</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {school.facilities.map((facility, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 text-sm font-medium">
                  Contact
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 text-sm font-medium">
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolsList;
