import React from 'react';

import BrandCard from './BrandCard';

import BrandsData from '../../Data/Data';

const BrandItems = ({ brandsFilter }) => {
  const filteredBrandsList = brandsFilter === "All" ? (
    BrandsData.slice(0)
  ) : (
    BrandsData.filter(brand => {
      return brand.type.includes(brandsFilter);
    })
  );

  const brandsList = filteredBrandsList.map(brand => {
    return (
      <BrandCard
        key={brand.id}
        mainImage={brand.mainImage}
        logo={brand.logo}
        content={brand.content} />
    )
  });

  return (
    <div className="brand-items">
      {brandsList}
    </div>
  );
};

export default BrandItems;