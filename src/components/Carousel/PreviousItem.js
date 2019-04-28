import React from 'react';

const PreviousItem = ({ activeIndex, setActiveIndex }) => {
  function handleClick() {
    setActiveIndex(
      activeIndex === 0 ? 2 : activeIndex - 1
    );
  }

  return (
    <div 
      className="carousel-arrow"
      onClick={handleClick}>
      <i className="fas fa-chevron-left fa-2x arrow"></i>
    </div>
  );
};

export default PreviousItem;