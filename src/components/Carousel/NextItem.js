import React from 'react';

const NextItem = ({ activeIndex, setActiveIndex }) => {
  function handleClick() {
    setActiveIndex(
      activeIndex === 2 || activeIndex < 0 ? 0 : activeIndex + 1
    );
  }

  return (
    <div 
      className="carousel-arrow reverse"
      onClick={handleClick}>
      <i className="fas fa-chevron-right fa-2x arrow"></i>
    </div>
  );
};

export default NextItem;