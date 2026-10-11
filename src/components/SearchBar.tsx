import React from 'react';

type SearchBarProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', value, onChange }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-md rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Search constellations"
      />
    </div>
  );
};

export default SearchBar;
