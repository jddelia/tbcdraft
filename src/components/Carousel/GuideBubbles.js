import React from 'react';

const GuideBubbles = ({ activeIndex, setActiveIndex }) => {
  const bubblesList = [0,0,0].map((_, index) => {
    const active = index === activeIndex ? "active" : null;
    return (
      <div
        key={index}
        className={`bubble ${active}`}
        onClick={() => setActiveIndex(index)}></div>
    );
  });

  return (
    <div className="guide-bubbles">
      {bubblesList}
    </div>
  );
};

export default GuideBubbles;