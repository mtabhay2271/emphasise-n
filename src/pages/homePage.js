import React from 'react';
import CollapsibleExample from '../components/layout/Navbar';
import ControlledCarousel from '../components/layout/Carousel';
import CardComponent from './components/layout/Cards';

const Home = () => {
  return (
    <>
      <CollapsibleExample />
      <ControlledCarousel />
      <CardComponent />
    </>
  );
};

export default Home;
