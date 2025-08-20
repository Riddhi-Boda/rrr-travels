import React, { useState } from 'react';
import { packageData } from '../data/packages';

const DestinationPackages = () => {
  const [selectedType, setSelectedType] = useState('tour');

  const destinations = [...new Set(packageData.map(p => p.destination))];

  return (
    <div className="px-4 md:px-16 py-8">
      {destinations.map(dest => {
        const filtered = packageData.find(
          p => p.destination === dest && p.type === selectedType
        );

        return (
          <section key={dest} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{dest}</h2>
              <div className="flex items-center gap-2">
                <button
                  className={`px-4 py-1 rounded-full text-sm ${selectedType === 'tour' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSelectedType('tour')}
                >
                  Tours
                </button>
                <button
                  className={`px-4 py-1 rounded-full text-sm ${selectedType === 'activity' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSelectedType('activity')}
                >
                  Activities
                </button>
                <button className="text-orange-600 text-sm font-semibold flex items-center">
                  View All <span className="ml-1">➜</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered?.packages.slice(0, 3).map(pkg => (
                <div key={pkg.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <img src={pkg.image} alt={pkg.title} className="rounded-t-xl w-full h-52 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{pkg.duration}</p>
                    <p className="font-semibold mb-2">{pkg.title}</p>
                    <div className="flex items-center text-sm text-green-600 mb-2">
                      <span>⭐ {pkg.rating}</span>
                      <span className="ml-1 text-gray-400">({pkg.reviews})</span>
                    </div>
                    <div className="text-xs mb-2">
                      {pkg.itinerary.map((item, i) => (
                        <span key={i} className="mr-2 bg-gray-100 px-2 py-1 rounded">{item}</span>
                      ))}
                    </div>
                    <div className="text-sm mb-2">
                      <span className="line-through text-gray-400 mr-2">{pkg.oldPrice}</span>
                      <span className="text-green-700 text-xs">{pkg.savings}</span>
                    </div>
                    <div className="font-bold text-lg text-gray-800">{pkg.price} <span className="text-sm font-normal">/ Adult</span></div>
                    <button className="w-full mt-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600">
                      📞 Request Callback
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DestinationPackages;
