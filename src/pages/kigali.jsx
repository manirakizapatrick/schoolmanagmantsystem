import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const schools = [
  { name: 'Lycee de Kigali', rating: 4.3, description: 'A renowned French-language school known for its rigorous academics.', address: 'Kigali, Rwanda', website: 'https://www.lyceedekigali.rw', contact: '+250 788 333 222' },
  { name: 'Academy of Rwanda', rating: 4.2, description: 'A school offering both Rwandan and international curricula, fostering academic excellence.', address: 'Kigali, Rwanda', website: 'https://www.academyofrwanda.rw', contact: '+250 788 444 111' },
  { name: 'International School of Kigali', rating: 4.4, description: 'A prestigious international school with a diverse student body and global focus.', address: 'Kigali, Rwanda', website: 'https://www.iskigali.org', contact: '+250 788 222 333' },
  { name: 'Rwanda International Academy', rating: 4.1, description: 'An academy offering both academic and co-curricular development for students.', address: 'Kigali, Rwanda', website: 'https://www.rwandaacademy.rw', contact: '+250 788 777 888' },
  { name: 'Green Hills Academy', rating: 4.8, description: 'A well-known private school offering high-quality education in Kigali.', address: 'KG 1 Ave, Kigali, Rwanda', website: 'https://www.greenhills.ac.rw', contact: '+250 788 123 456' },
  { name: 'Kigali International School', rating: 4.6, description: 'An international school offering a curriculum recognized worldwide.', address: 'Kigali, Rwanda', website: 'https://www.kisrwanda.org', contact: '+250 788 789 123' },
  { name: 'FAWE Girls School', rating: 4.7, description: 'A leading school empowering girls through education in Kigali.', address: 'Kigali, Rwanda', website: 'https://www.fawegirls.rw', contact: '+250 788 456 789' },
  { name: 'King David Academy', rating: 4.5, description: 'A top-tier academic institution with a focus on leadership and integrity.', address: 'Kigali, Rwanda', website: 'https://www.kingdavidacademy.rw', contact: '+250 788 555 444' },
];

const KigaliSchools = () => {
  const [visibleSchools, setVisibleSchools] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (searchQuery) {
      setFlash(true);
      setTimeout(() => setFlash(false), 500);
    }
  }, [searchQuery]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-3xl font-bold text-center text-blue-700 flex-grow">Schools in Kigali</h1>
      </div>
      
      <div className="mt-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search for a school..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${flash ? 'animate-pulse' : ''}`}>
        {filteredSchools.slice(0, visibleSchools).map((school, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-800">{school.name}</h2>
            <p className="text-gray-600 mt-2">{school.description}</p>
            <p className="text-gray-700 mt-2"><strong>Rating:</strong> {school.rating}</p>
            <p className="text-gray-700 mt-2"><strong>Address:</strong> {school.address}</p>
            <p className="text-gray-700 mt-2"><strong>Contact:</strong> {school.contact}</p>
            <a 
              href={school.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>

      {visibleSchools < filteredSchools.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleSchools(prev => prev + 3)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default KigaliSchools;
