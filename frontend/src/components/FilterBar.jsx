// src/components/FilterBar.jsx
import { useState } from 'react';

// Reusable Icon component for the search input
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
    </svg>
);

function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };
  
  const handleClear = () => {
    const clearedFilters = { search: '', location: '', type: '' };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters); // Immediately update the job list on clear
  };

  return (
    <form onSubmit={handleSearch} className="w-full bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full md:flex-1">
            <SearchIcon />
            <input
                type="text"
                name="search"
                placeholder="Job title or keyword..."
                value={filters.search}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>

        {/* Location Input */}
        <input
            type="text"
            name="location"
            placeholder="Location (e.g. New York)"
            value={filters.location}
            onChange={handleInputChange}
            className="w-full md:w-auto py-2 px-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Job Type Select */}
        <select
            name="type"
            value={filters.type}
            onChange={handleInputChange}
            className="w-full md:w-auto py-2 px-3 border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
            <option value="">All Types</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
        </select>

        <div className="w-full md:w-auto flex items-center gap-2">
           <button
             type="button"
             onClick={handleClear}
             className="w-1/2 md:w-auto px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
           >
             Clear
           </button>
           <button
             type="submit"
             className="w-1/2 md:w-auto bg-slate-800 text-white px-5 py-2 rounded-md font-semibold hover:bg-slate-900 transition-colors"
           >
             Search
           </button>
        </div>
    </form>
  );
}

export default FilterBar;
