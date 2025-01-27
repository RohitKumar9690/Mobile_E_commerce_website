import React from 'react';

const BrandFilter = ({ selectedBrand, onBrandChange }) => {
  return (
    <div className="flex items-center m-2">
      <select
        className="p-2 border border-gray-300 rounded"
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}
      >
        <option value="All">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="OnePlus">OnePlus</option>
      </select>
    </div>
  );
};

export default BrandFilter;
