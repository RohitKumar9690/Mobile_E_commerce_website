import React from 'react';
import { Search } from 'lucide-react'; // Import search icon from Lucide (or use any icon library you prefer)

const SearchFilter = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-md bg-white shadow-sm hover:shadow-md focus-within:shadow-lg transition-all duration-300">
      {/* Search Icon */}
      <Search className="h-5 w-5 text-gray-500 ml-2" />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        className="p-3 w-48 lg:w-72 xl:w-96 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-400 transition-all duration-200"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
