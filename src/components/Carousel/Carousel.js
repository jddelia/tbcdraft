import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import CarouselItem1 from './CarouselItem1';
import CarouselItem2 from './CarouselItem2';
import CarouselItem3 from './CarouselItem3';
import GuideBubbles from './GuideBubbles';
import NextItem from './NextItem';
import PreviousItem from './PreviousItem';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transitions = useTransition(activeIndex, null, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { display: "none" }
  });

  useEffect(() => {
    const playCarousel = setInterval(() => setActiveIndex(
      activeIndex === 2 || activeIndex < 0 ? 0 : activeIndex + 1
    ), 4000);

    return () => clearInterval(playCarousel);
  }, [activeIndex]);

  let carouselItemDisplayed;

  switch (activeIndex) {
    case 0:
      carouselItemDisplayed = transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <CarouselItem1 />
        </animated.div>
      ));
      
      break;
    case 1:
      carouselItemDisplayed = transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <CarouselItem2 />
        </animated.div>
      ));

      break;
    case 2:
      carouselItemDisplayed = transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <CarouselItem3 />
        </animated.div>
      ));

      break;
    default:
      carouselItemDisplayed = transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <CarouselItem1 />
        </animated.div>
      ));
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