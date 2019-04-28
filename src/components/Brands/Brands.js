import React, { useState } from 'react';

import BrandsHeader from './BrandsHeader';
import BrandsOptions from './BrandsOptions';
import BrandItems from './BrandItems';

const Brands = () => {
  const [brandsFilter, setBrandsFilter] = useState("All");

  return (
    <div className="brands">
      <BrandsHeader />
      <BrandsOptions handleBrandsFilter={setBrandsFilter} />
      <BrandItems brandsFilter={brandsFilter} />
    </div>
  );
};

export default Brands;