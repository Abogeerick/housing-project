import React from 'react';

const HouseCard = ({ house }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img className="w-full h-48 object-cover" src={house.image} alt={house.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{house.title}</div>
        <p className="text-gray-700 text-base">
          {house.briefDescription}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {house.amenities.map((amenity, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HouseCard;
