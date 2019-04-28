import React, { useState, useRef, useEffect } from 'react';

const BrandsOptions = ({ handleBrandsFilter }) => {
  const [selectedHistory, setSelectedHistory] = useState([]);
  const firstOption = useRef();

  useEffect(() => {
    if (!selectedHistory[0]) {
      (async () => await setSelectedHistory([firstOption.current]))();
    }
  }, [firstOption])

  function handleClick(e) {
    const filterText = e.target.textContent.split(" ")[0];
    handleBrandsFilter(filterText);

    if (selectedHistory[0]) {
      selectedHistory[0].classList.remove("selected");
    }
    
    e.target.classList.add("selected");

    setSelectedHistory([e.target]);
  }

  return (
    <div className="brand-options">
      <span
        ref={firstOption}
       className="option selected"
       onClick={handleClick}>
       All Brands
      </span>

      <span
       className="option"
       onClick={handleClick}>
       Retail
      </span>

      <span
       className="option"
       onClick={handleClick}>
       Franchise
      </span>

      <span
       className="option"
       onClick={handleClick}>
       Wholesale
      </span>

      <span
       className="option"
       onClick={handleClick}>
       International
      </span>

      <span
       className="option"
       onClick={handleClick}>
       Fleet
      </span>

      <span
       className="option"
       onClick={handleClick}>
       Software
      </span>
    </div>
  );
};

export default BrandsOptions;