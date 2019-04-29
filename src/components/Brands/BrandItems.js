import React from 'react';
import { useTransition, animated } from 'react-spring';

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

  const transitions = useTransition(filteredBrandsList, brand => brand.id, {
    from: { opacity: 0, transform: 'translate(40px, 0px)' },
    enter: { opacity: 1, transform: 'translate(0, 0px)' },
    leave: { display: "none" },
  });

  console.log(transitions)

  const brandsList = transitions.map(({item, props, key}) => {
    console.log(item);
    
    return (
      <animated.div key={key} style={props}>
        <BrandCard
        mainImage={item.mainImage}
        logo={item.logo}
        content={item.content} />
      </animated.div>
    );
  });

  return (
    <div className="brand-items">
      {brandsList}
    </div>
  );
};

export default BrandItems;