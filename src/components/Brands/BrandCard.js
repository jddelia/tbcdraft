import React from 'react';

const BrandCard = ({ mainImage, logo, content }) => {
  return (
    <div className="brand-card">
      <img
        className="brand-card-img"
        src={mainImage}
        alt="brand" />
      
      <img
        className="brand-card-logo"
        src={logo}
        alt="brnad logo" />

      <span className="brand-card-content">{content}</span>

      <button className="brand-card-button">Learn More</button>
    </div>
  );
};

export default BrandCard;