import React, { useState, useEffect } from 'react';
import Header from './Header';
import HouseCard from './HouseCard';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [newPlans, setNewPlans] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [luxury, setLuxury] = useState([]);

  useEffect(() => {
    // Fetch data from each category and set the state
    const fetchData = async () => {
      try {
        const resTrending = await fetch('http://localhost:3000/trendingHouseplans');
        const trendingData = await resTrending.json();
        setTrending(trendingData);

        const resNew = await fetch('http://localhost:3000/newHouseplans');
        const newData = await resNew.json();
        setNewPlans(newData);

        const resFeatured = await fetch('http://localhost:3000/featuredHouseplans');
        const featuredData = await resFeatured.json();
        setFeatured(featuredData);

        const resLuxury = await fetch('http://localhost:3000/luxuryHouseplans');
        const luxuryData = await resLuxury.json();
        setLuxury(luxuryData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const renderCategory = (title, houses) => (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 py-4 px-6">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      {renderCategory("Trending Houseplans", trending)}
      {renderCategory("New Houseplans", newPlans)}
      {renderCategory("Featured Houseplans", featured)}
      {renderCategory("Luxury Houseplans", luxury)}
    </div>
  );
}

export default Home;
