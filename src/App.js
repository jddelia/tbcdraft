import React from 'react';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import Brands from './components/Brands/Brands';
import QuickLinks from './components/QuickLinks/QuickLinks';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Brands />
      <QuickLinks />
    </>
  );
}

export default App;
