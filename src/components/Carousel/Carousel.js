import React, { useState, useEffect } from 'react';

import CarouselItem1 from './CarouselItem1';
import CarouselItem2 from './CarouselItem2';
import CarouselItem3 from './CarouselItem3';
import GuideBubbles from './GuideBubbles';
import NextItem from './NextItem';
import PreviousItem from './PreviousItem';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const playCarousel = setInterval(() => setActiveIndex(
      activeIndex === 2 || activeIndex < 0 ? 0 : activeIndex + 1
    ), 4000);

    return () => clearInterval(playCarousel);
  }, [activeIndex]);

  let carouselItemDisplayed;

  switch (activeIndex) {
    case 0:
      carouselItemDisplayed = <CarouselItem1 />;
      break;
    case 1:
      carouselItemDisplayed = <CarouselItem2 />;
      break;
    case 2:
      carouselItemDisplayed = <CarouselItem3 />;
      break;
    default:
      carouselItemDisplayed = <CarouselItem1 />;
  }

  return (
    <div className="carousel">
      <PreviousItem 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex} />

      {carouselItemDisplayed}

      <NextItem 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex} />

      <GuideBubbles 
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default Carousel;