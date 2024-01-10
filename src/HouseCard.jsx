import React from 'react';

const HouseCard = ({ house }) => {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={house.image} alt={house.title} />
      <div className="px-4 py-3">
        <div className="font-bold text-lg mb-2">{house.title}</div>
        <p className="text-gray-700 text-sm">
          {house.briefDescription}
        </p>
      </div>
      <div className="px-4 pb-4">
        {house.amenities.map((amenity, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HouseCard;
