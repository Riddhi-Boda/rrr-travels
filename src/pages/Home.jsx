import React from 'react';
import DestinationPackages from '../components/DestinationPackages';
import DestinationSlider from '../components/DestinationSlider'; 
import Footer from '../components/Footer'; 

const Home = () => {
  return (
    <div>
      <DestinationSlider />
      <DestinationPackages />
      <Footer />
    </div>
  );
};

export default Home;
