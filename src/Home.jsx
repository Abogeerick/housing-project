import React, { useState, useEffect } from 'react';
import Header from './Header';
import HouseCard from './HouseCard';
import HouseDetailsModal from './HouseDetailsModal';
import Footer from './Footer';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [newPlans, setNewPlans] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [luxury, setLuxury] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    // Fetch data from each category and set the state
    const fetchData = async () => {
      try {
        const resTrending = await fetch('https://api.jsonbin.io/v3/b/66c3538aacd3cb34a876a963/trendingHouseplans');
        const trendingData = await resTrending.json();
        setTrending(trendingData);

        const resNew = await fetch('https://api.jsonbin.io/v3/b/66c3538aacd3cb34a876a963/newHouseplans');
        const newData = await resNew.json();
        setNewPlans(newData);

        const resFeatured = await fetch('https://api.jsonbin.io/v3/b/66c3538aacd3cb34a876a963/featuredHouseplans');
        const featuredData = await resFeatured.json();
        setFeatured(featuredData);

        const resLuxury = await fetch('https://api.jsonbin.io/v3/b/66c3538aacd3cb34a876a963/luxuryHouseplans');
        const luxuryData = await resLuxury.json();
        setLuxury(luxuryData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (house) => {
    setSelectedHouse(house);
  };

  const closeModal = () => {
    setSelectedHouse(null);
  };

  const renderCategory = (title, houses) => (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 py-4 px-6">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} onClick={openModal} />
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
      <Footer />
      {selectedHouse && <HouseDetailsModal house={selectedHouse} onClose={closeModal} />}
    </div>
  );
}

export default Home;
