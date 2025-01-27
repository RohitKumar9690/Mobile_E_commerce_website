
import React from 'react';

const PriceFilter = ({ selectedPriceRange, onPriceRangeChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <select
        className="p-2 border border-gray-300 rounded"
        value={selectedPriceRange}
        onChange={(e) => onPriceRangeChange(e.target.value)}
      >
        <option value="All">All Prices</option>
        <option value="Low">Under $500</option>
        <option value="Mid">$500 - $1000</option>
        <option value="High">Above $1000</option>
      </select>
    </div>
  );
};

export default PriceFilter;
