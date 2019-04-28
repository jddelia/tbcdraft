import React from 'react';

const BrandsOptions = ({ handleBrandsFilter }) => {
  return (
    <div className="brand-options">
      <span
       className="option"
       onClick={() => handleBrandsFilter("All")}>
       All Brands
      </span>

      <span
       className="option"
       onClick={() => handleBrandsFilter("Retail")}>
       Retail
      </span>

      <span
       className="option"
       onClick={() => handleBrandsFilter("Franchise")}>
       Franchise
      </span>

      <span
       className="option"
       onClick={() => handleBrandsFilter("Wholesale")}>
       Wholesale
      </span>

      <span
       className="option"
       onClick={() => handleBrandsFilter("International")}>
       International
      </span>

      <span
       className="option"
       onClick={() => handleBrandsFilter("Fleet")}>
       Fleet
      </span>

      <span
       className="option"
       onClick={() => handleBrandsFilter("Software")}>
       Software
      </span>
    </div>
  );
};

export default BrandsOptions;