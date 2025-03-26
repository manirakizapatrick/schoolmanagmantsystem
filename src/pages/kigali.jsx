import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const schools = [
  { name: 'Lycee de Kigali', rating: 4.3, description: 'A renowned French-language school known for its rigorous academics.', address: 'Kigali, Rwanda', contact: '+250 788 333 222', slug: 'lycee-de-kigali' },
  { name: 'Academy of Rwanda', rating: 4.2, description: 'A school offering both Rwandan and international curricula, fostering academic excellence.', address: 'Kigali, Rwanda', contact: '+250 788 444 111', slug: 'academy-of-rwanda' },
  { name: 'International School of Kigali', rating: 4.4, description: 'A prestigious international school with a diverse student body and global focus.', address: 'Kigali, Rwanda', contact: '+250 788 222 333', slug: 'international-school-of-kigali' },
  { name: 'Rwanda International Academy', rating: 4.1, description: 'An academy offering both academic and co-curricular development for students.', address: 'Kigali, Rwanda', contact: '+250 788 777 888', slug: 'rwanda-international-academy' },
  { name: 'Green Valley School', rating: 4.5, description: 'A school focused on sustainability and environmental awareness.', address: 'Kigali, Rwanda', contact: '+250 788 888 888', slug: 'green-valley-school' },
  { name: 'New Horizons School', rating: 4.0, description: 'A modern school promoting creativity and innovation in its curriculum.', address: 'Kigali, Rwanda', contact: '+250 788 666 666', slug: 'new-horizons-school' },
];

const KigaliSchools = ({ onBack }) => {
  const [visibleSchools, setVisibleSchools] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [flash, setFlash] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state
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

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleSchools(prev => prev + 3); // Simulate showing more schools
      setLoading(false); // End loading after a delay
    }, 1000); // Simulate delay (mocking a fetch process)
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center">
        <button onClick={onBack} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
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
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => navigate(`/school/${school.slug}`)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="text-center mt-6">Loading more schools...</div>
      ) : (
        visibleSchools < filteredSchools.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Show More
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default KigaliSchools;
